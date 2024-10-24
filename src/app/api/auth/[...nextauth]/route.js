import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// const handler = NextAuth({
// session: {
//     strategy:"jwt",
//     maxAge: 30 * 24 * 60 * 60,
// },
// providers:[
//     CredentialsProvider({
// credentials:{
// email:{},
// password:{},
// },
// async authorize(credentials) {
// const {email,password}=credentials;
// if(!email || !password){
//     return null;
// }
// const db = await connectDB();
// const currenUser= await db.collection('users').findOne({email})

// if(!currenUser){
//     return null;
// }
// const passwordMatched=bcrypt.compareSync(
//     password,
//     currenUser.password
// );
// if(!passwordMatched){
//     return null;
// }
// return currenUser;
// }
//     }),
// ],

// // custom use login from not using next aut login
// pages:{
//     signIn:'/login',
// },

// });
// export { handler as GET, handler as POST };


// const handler = NextAuth({
//     // secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//     session: {
//       strategy: "jwt",
//       maxAge: 30 * 24 * 60 * 60,

//     },
//     providers: [
//       CredentialsProvider({
//         credentials: {
//           email: {},
//           password: {},
//         },
//         async authorize(credentials) {
//           const { email, password } = credentials;

//           // Ensure both email and password exist
//           if (!email || !password) {
//             return null;
//           }
//           const db = await connectDB();
//           const currenUser = await db.collection('users').findOne({ email });
//           if (!currenUser) {
//             return null;
//           }
        
//           const passwordMatched = bcrypt.compareSync(password, currenUser.password);
//           if (!passwordMatched) {
//             return null;
//           }
//           return {
//             id: currenUser._id.toString(),
//             email: currenUser.email,
//             name: currenUser.name,
//           };
//         },
//       }),
    
//         GoogleProvider({
//           clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//           clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
//         }),

//         GitHubProvider({
//           clientId: process.env.GITHUB_ID,
//           clientSecret: process.env.GITHUB_SECRET
//         })
      
      
//     ],

//     pages: {
//       signIn: "/login",
  
//     },
// callbacks:{
//  async signIn({user, account}){

//   if(account.provider === 'google' || account.provider === "github"){
// const {name,email,image}=user;
// try {

//   const db= await connectDB();

//   const userCollection = db.collection('users');

//   const userExist = await userCollection.findOne({email})

//   if(!userExist){
//     const res= await userCollection.insertOne(user);
//     return user;

//   }
  
// } catch (error) {
//   console.log(error);
// }
//   }else{
//     return user;
//   }
//  }

// }

//   });
  
//   export { handler as GET, handler as POST };


const handler = NextAuth({
 secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const db = await connectDB();
        const currenUser = await db.collection('users').findOne({ email });
        if (!currenUser) return null;

        const passwordMatched = bcrypt.compareSync(password, currenUser.password);
        if (!passwordMatched) return null;

        return {
          id: currenUser._id.toString(),
          email: currenUser.email,
          name: currenUser.name,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google' || account.provider === "github") {
        const { email } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection('users');
          const userExist = await userCollection.findOne({ email });

          if (!userExist) {
            await userCollection.insertOne(user);
          }
          return true; // Continue sign-in
        } catch (error) {
          console.log(error);
          return false; // Fail sign-in
        }
      }
      return true; // Default return for non-social login
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

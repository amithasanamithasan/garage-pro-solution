import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";


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


const handler = NextAuth({
    // secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,

    },
    providers: [
      CredentialsProvider({
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials) {
          const { email, password } = credentials;

          // Ensure both email and password exist
          if (!email || !password) {
            return null;
          }
          const db = await connectDB();
          const currenUser = await db.collection('users').findOne({ email });
          if (!currenUser) {
            return null;
          }
        
          const passwordMatched = bcrypt.compareSync(password, currenUser.password);
          if (!passwordMatched) {
            return null;
          }
          return {
            id: currenUser._id.toString(),
            email: currenUser.email,
            name: currenUser.name,
          };
        },
      }),
     
      
    ],

    pages: {
      signIn: "/login",
  
    },


  });
  
  export { handler as GET, handler as POST };
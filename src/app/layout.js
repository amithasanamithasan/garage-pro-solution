import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import AuthProvider from "@/authservices/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Garage Pro Solution",
    template: "%s | Garage Pro Solution",
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
        <AuthProvider>

          <Navbar />

          {children}

        </AuthProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import { AdminAuthProvider } from "../app/admin/context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACTPL Group",
  description: "ACTPL Group website description goes here ...",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning   // ← tells React to ignore attribute mismatches
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning   // ← stops the cz-shortcut-listen warning
      >
          <AdminAuthProvider>
        {children}
        <ToastContainer autoClose={2000} />
        </AdminAuthProvider>
      </body>
    </html>
  );
}
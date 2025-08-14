import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={"antialiased transition-colors duration-500"}>
        <Toaster position="top-center" />
        <Providers>
          <Cursor />
          <LoadingScreen />
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

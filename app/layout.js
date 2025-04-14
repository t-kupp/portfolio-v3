import Header from "@/components/Header";
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
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

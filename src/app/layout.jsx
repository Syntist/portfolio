import { ToastContainer } from "react-toastify";
import { Oswald, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "./provider";
import Header from "@/sharedComponents/Header";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
  variable: "--font-roboto",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Syed Talha Khalid",
  description: "Crafting Scalable & Delightful Digital Experiences",
  icons: {
    icon: "/favicon.ico", // place this in /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional, for iOS
  },
  openGraph: {
    title: "Syed Talha Khalid",
    description: "Crafting Scalable & Delightful Digital Experiences",
    url: "https://www.syedtalhakhalid.com", // <-- your deployed domain
    siteName: "Syed Talha Khalid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Talha Khalid",
    description: "Crafting Scalable & Delightful Digital Experiences",
    images: ["https://www.syedtalhakhalid.com/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
          <Providers>
            <Header />
            {children}
          </Providers>
          <ToastContainer />
          <Analytics />
      </body>
    </html>
  );
}

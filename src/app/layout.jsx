import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oswald, Roboto } from "next/font/google";
import Providers from "./provider";
import "./globals.css";
import Header from "@/sharedComponents/Header";
import { Analytics } from "@vercel/analytics/next";

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

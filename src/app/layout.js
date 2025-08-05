
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto", // set the CSS variable
  display: "swap",
});

export const metadata = {
  title: "Certbills",
  description: "Certbills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
     
      <body>
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}


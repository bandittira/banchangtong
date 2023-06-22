import "./globals.css";
import { Inter } from "next/font/google";
import Body from "./components/Body";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Banchangtong Pattaya by Preecha",
  description: "Jewellery shop and factory",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
      <Header></Header>
      <Navbar></Navbar>
      <Body></Body>
      </body>
    </html>
  );
}

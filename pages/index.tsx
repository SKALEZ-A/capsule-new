import Image from "next/image";
import localFont from "next/font/local";
import CapsulePage from "./component/capsulePage";

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

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
    <div className="">
      <h1 className="text-white ">THIS IS THE STARTING OF CAPSULE.</h1>
      <CapsulePage />
    </div>
   </div>
  );
}

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Nebula Pulse",
  description: "Nebula Pulse is a cutting-edge software development company specializing in delivering innovative AI-powered solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <body className={jetbrainsMono.variable}>
        <Header></Header>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}

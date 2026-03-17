import { Roboto } from "next/font/google";
import Navigation from "./components/Navigation";
import ChatHelper from "./components/ChatHelper";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <ChatHelper />
      </body>
    </html>
  );
}

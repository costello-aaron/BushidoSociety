import { Afacad } from "next/font/google";
import "./globals.css";
import Taskbar from "@/components/taskbar";

const inter = Afacad({ subsets: ["latin"] });

export const metadata = {
  title: "Bushido Society",
  description: "UI",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className='dark'>
      <body>
        <Taskbar />
        {children}
      </body>
    </html>
  );
}
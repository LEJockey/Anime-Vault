import { DM_Sans } from "next/font/google";
import './globals.css'
import Head from '@/components/Head';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={dmSans.className}>
      <main className="max-w-7xl mx-auto bg-[#0F1117]">
        <Head/>
        {children}
        <Footer/>
      </main>
    </body>
  </html>
  )
}

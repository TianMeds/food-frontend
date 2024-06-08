import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rene & Grace Sizzlingg ",
  description: "Rene & Grace Sizzlingg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {children}

        </body>
    </html>
  );
}

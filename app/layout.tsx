import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Instaskool Tech",
  description: "Instaskool Tech",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Declan-Infotech",
  description: "Frontend site with Ubuntu font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main className="min-h-screen flex flex-col bg-white text-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}

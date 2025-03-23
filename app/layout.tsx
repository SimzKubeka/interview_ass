import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
 title: "Bluegrass Assessment",
 description:
  "Bluegrass Assessment - Frontend Engineer",
};

export default function LoginLayout({
 children,
}: {
 children: ReactNode;
}) {
 return (
  <html lang="en">
   <body className="font-sans bg-gray-50 text-gray-900">
    <main className="min-h-screen flex items-center justify-center">
     {children}
    </main>
   </body>
  </html>
 );
}

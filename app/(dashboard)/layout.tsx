import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
 children,
}: {
 children: ReactNode;
}) {
 return (
  <div className="flex w-full min-h-screen bg-background">
   <Sidebar />
   <div className="flex-1">
    <Navbar />
    <main className="p-6">{children}</main>
   </div>
  </div>
 );
}

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) {
    return <main className="flex-grow flex flex-col">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col pt-[88px]">
        {children}
      </main>
      <Footer />
    </>
  );
}

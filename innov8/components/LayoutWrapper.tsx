"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSplashPage = pathname === "/";

  return (
    <>
      {!isSplashPage && <Navbar />}
      {children}
      {!isSplashPage && <Footer />}
    </>
  );
}

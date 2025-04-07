import { HeaderOrder } from "@/app/widgets/headerOrder/headerOrder";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Quest House - Страница квеста",
  description: "Страница квеста",
};

const Footer = dynamic(() => import("@/app/widgets/footer/footer"));

export default function HorrorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderOrder />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

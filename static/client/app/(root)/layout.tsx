import { Metadata } from "next";
import { Header } from "../widgets/header/header";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Quest House - Главная страница",
  description: "Лучшие квесты",
};

const Footer = dynamic(() => import("../widgets/footer/footer"));

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

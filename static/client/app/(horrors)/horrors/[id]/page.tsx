import { $api } from "@/app/entities/api";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../../../pages/OrderPage/HeroSection/HeroSection")
);
const PoliceSection = dynamic(
  () => import("../../../pages/OrderPage/PoliceSection/PoliceSection")
);
const ReservationSection = dynamic(
  () => import("../../../pages/OrderPage/ReservationSection/ReservationSection")
);
const ReviewsSection = dynamic(
  () => import("../../../pages/OrderPage/ReviewsSection/ReviewsSection")
);
const ContactsSection = dynamic(
  () => import("../../../pages/OrderPage/ContactsSection/ContactsSection")
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`${$api}/api/horrors/${id}`);
    const data = await res.json();

    return {
      title: `Quest House - ${data.name}`,
      description: data.description,
      keywords: "квест, ужас, приключение",
    };
  } catch (err) {
    console.error("Ошибка запроса метадаты", err);
    return {
      title: "Quest House - Страница квеста",
      description:
        "Погрузитесь в мир ужаса с нашими захватывающими хоррор-квестами! Испытайте свои нервы, решая загадки и преодолевая страхи в темных и таинственных локациях. Идеально подходит для любителей острых ощущений и командных приключений. Забронируйте свой квест уже сегодня и откройте для себя незабываемые эмоции!",
      keywords: "квест, ужас, приключение",
    };
  }
}

const HorrorsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const questsFetch = await fetch(`${$api}/api/horrors/`);
  const res = await fetch(`${$api}/api/horrors/${id}`);
  const resSlots = await fetch(`${$api}/api/horrors/${id}/available-slots/`);

  const quests = await questsFetch.json();
  const data = await res.json();
  const dataSlots = await resSlots.json();

  if (!quests || !data || !dataSlots) {
    console.error("Ошибка запроса");
  }

  return (
    <>
      <HeroSection quests={quests} data={data} />
      <PoliceSection />
      <ReservationSection name={data.name} slots={dataSlots} />
      <ReviewsSection />
      <ContactsSection />
    </>
  );
};

export default HorrorsPage;

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/app/pages/HomePage/HeroSection/HeroSection")
);
const PopularSection = dynamic(
  () => import("@/app/pages/HomePage/PopularSection/PopularSection")
);
const HandsSection = dynamic(
  () => import("@/app/pages/HomePage/HandsSection/HandsSection")
);
const AboutSection = dynamic(
  () => import("@/app/pages/HomePage/AboutSection/AboutSection")
);
const ReservationSection = dynamic(
  () => import("@/app/pages/HomePage/ReservationSection/ReservationSection")
);
const ReviewsSection = dynamic(
  () => import("@/app/pages/HomePage/ReviewsSection/ReviewsSection")
);
const ContactsSection = dynamic(
  () => import("@/app/pages/HomePage/ContactsSection/ContactsSection")
);

const HomePage = () => {
  return (
    <main className="main">
      <HeroSection />
      <PopularSection />
      <HandsSection />
      <AboutSection />
      <ReservationSection />
      <ReviewsSection />
      <ContactsSection />
    </main>
  );
};

export default HomePage;

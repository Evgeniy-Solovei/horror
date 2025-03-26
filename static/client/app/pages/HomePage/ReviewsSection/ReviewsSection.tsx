import { TitleUI } from "@/app/shared/ui/titleUI/titleUI";
import { Reviews } from "@/app/widgets/reviews/reviews";

const ReviewsSection = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews__block">
          <TitleUI title="Отзывы" link="Перейти к квестам" href="#popular" />
          <Reviews />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

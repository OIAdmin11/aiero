import { previewFeatureCards, previewTestimonials } from "@/data/preview";
import TitleSplitWrapper from "../common/TitleSplitWrapper";
import SubTitleWrapper from "../common/SubTitleWrapper";

const STARS = 5;

function StarRating() {
  return (
    <ul className="rating">
      {Array.from({ length: STARS }, (_, i) => (
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      ))}
    </ul>
  );
}

const TESTIMONIALS_PER_COL = 3;

export default function FeaturesAndTestimonials() {
  const testimonialColumns: (typeof previewTestimonials)[] = [];
  for (let i = 0; i < previewTestimonials.length; i += TESTIMONIALS_PER_COL) {
    testimonialColumns.push(
      previewTestimonials.slice(i, i + TESTIMONIALS_PER_COL),
    );
  }

  return (
    <>
      {/* feature-style11 */}
      <section
        id="features"
        className="feature-sec11 ibt-section-gapBottom ibt-section-gapTop"
      >
        <div className="container">
          <div className="sec-title white">
            <SubTitleWrapper>features</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              Expanding upon various useful features and functionalities
            </TitleSplitWrapper>
          </div>
          <div className="row">
            {previewFeatureCards.map((card) => (
              <div key={card.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className="feature-card11">
                  <img
                    alt={card.title}
                    src={card.iconSrc}
                    width={card.iconWidth}
                    height={card.iconHeight}
                  />
                  <h4 className="title">{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End feature-style11 */}
      {/* testimonial-sec3 */}
      <section className="testimonial-sec3">
        <div className="container3">
          <div className="testi-title3">
            <StarRating />
            <h2 className="title">
              User stories: hear what others love about our{" "}
              <span>Other Templates</span>!
            </h2>
          </div>
          <div className="row">
            {testimonialColumns.map((column, colIndex) => (
              <div key={colIndex} className="col-lg-3 col-md-6">
                {column.map((testimonial, rowIndex) => (
                  <div
                    key={testimonial.id}
                    className={
                      rowIndex === column.length - 1
                        ? "test-block3 mb-0"
                        : "test-block3"
                    }
                  >
                    <h4 className="name">{testimonial.name}</h4>
                    <StarRating />
                    <p>{testimonial.quote}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End testimonial-sec3 */}
    </>
  );
}

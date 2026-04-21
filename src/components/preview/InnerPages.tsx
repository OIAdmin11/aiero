import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { innerPagesSlides } from "@/data/innerPages";
import { setupCustomCursor } from "@/utils/customCursor";
import TitleSplitWrapper from "../common/TitleSplitWrapper";
import SubTitleWrapper from "../common/SubTitleWrapper";
import Counter from "../common/Counter";

const slides = [...innerPagesSlides, ...innerPagesSlides];

export default function InnerPages() {
  const customCursorRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cleanup = setupCustomCursor({
      cursor: customCursorRef.current,
      blocks: blockRefs.current.filter(Boolean) as HTMLDivElement[],
    });
    return cleanup;
  }, []);

  return (
    <section id="inner-pages" className="project-sec10 ibt-section-gap">
      <div className="custom-cursor" ref={customCursorRef}>
        DRAG
      </div>
      <div className="title-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-8">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>inner pages</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Exploring the Airo inner pages journey
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-7 col-lg-4 col-md-6 col-sm-8">
              <div className="user-count">
                <div className="counter-box26">
                  <Counter max={50} extraClass="percent-counter" />
                  <span className="counter-text">+</span>
                </div>
                <span className="user">Inner pages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="swiper-wrapper-parent">
          <Swiper
            modules={[Navigation]}
            {...{
              loop: true,
              // autoplay: { delay: 3000, disableOnInteraction: false },
              slidesPerView: 4.5,
              spaceBetween: 20,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1440: { slidesPerView: 4.5, spaceBetween: 30 },
                1366: { slidesPerView: 4.5, spaceBetween: 30 },
                1201: { slidesPerView: 4.5, spaceBetween: 30 },
                1025: { slidesPerView: 3.5, spaceBetween: 30 },
                769: { slidesPerView: 2.4, spaceBetween: 30 },
                577: { slidesPerView: 2.3, spaceBetween: 20 },
                480: { slidesPerView: 1, spaceBetween: 20 },
                375: { slidesPerView: 1, spaceBetween: 20 },
              },
            }}
            className="swiper project-slider10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={`${slide.id}-${index}`}
                className="swiper-slide"
              >
                <div
                  className="project-img10"
                  ref={(el) => {
                    blockRefs.current[index] = el;
                  }}
                >
                  <img
                    alt={slide.alt ?? "AI Agency & Technology HTML Template"}
                    src={slide.imageSrc}
                    width={slide.width}
                    height={slide.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

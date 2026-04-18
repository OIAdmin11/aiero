import { useRef } from "react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { previewTechLinks } from "@/data/preview";
import {
  useIsDesktop,
  useOGLDeformEffect,
} from "../homes/home-8/useOGLDeformEffect";
import TitleSplitWrapper from "../common/TitleSplitWrapper";
import Counter from "../common/Counter";

const IMAGE_PATH = "/assets/images/bg/intro-bg.png";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDesktop = useIsDesktop();

  useOGLDeformEffect({
    canvasRef,
    containerRef: sectionRef,
    imagePath: IMAGE_PATH,
    enabled: isDesktop,
  });

  const isMobileStyle = !isDesktop;
  return (
    <section
      ref={sectionRef}
      className="main-sec6"
      style={{
        position: "relative",
        backgroundImage: `url(${IMAGE_PATH})`,
        backgroundSize: isMobileStyle ? "auto" : "cover",
        backgroundPosition: isMobileStyle ? "center -156px" : "center",
        backgroundRepeat: isMobileStyle ? "no-repeat" : undefined,
      }}
    >
      <canvas
        ref={canvasRef}
        className="fluid-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          pointerEvents: "none",
          visibility: isDesktop ? "visible" : "hidden",
        }}
        aria-hidden
      />
      <ScrollReveal.Root
        from={{ y: 80, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={0.8}
        ease="power3.out"
        staggerDelay={0.03}
        scrollTrigger={{ start: "top 95%", end: "bottom 80%", once: true }}
      >
        {/* hero-style15 */}
        <div className="hero-style15">
          <div className="container">
            <div className="banner-content15">
              <img
                alt="AI Agency & Technology ReactJs Template"
                src="/assets/images/logo5.svg"
                width="81"
                height="15"
              />
              <TitleSplitWrapper tag="h1" className="title animated-heading">
                Meet Powerfull AI Agency &amp; Technology React Js Template
              </TitleSplitWrapper>
              <a href="#demo" className="ibt-btn ibt-btn-secondary">
                <span>See Demo</span>
                <i className="icon-arrow-top" />
              </a>
            </div>
          </div>
        </div>
        {/* End hero-style15 */}
        {/* service-sec23 */}
        <div className="service-sec23">
          <div className="container2">
            <div className="row">
              <div className="col-xl-5 col-lg-12">
                <ScrollReveal.Item className="ser-card23-card1 ser-anim">
                  <div className="funfact-content23">
                    <div className="counter-box23">
                      <Counter max={300} extraClass="percent-counter" />
                      <span className="counter-text">+</span>
                    </div>
                    <h4 className="title">
                      Awesome collection <br />
                      of different Block &amp; Sections
                    </h4>
                    <p>
                      Featuring an extensive collection of blocks and
                      ready-to-use pages, you’ll have all the tools to build a
                      standout, unforgettable website.
                    </p>
                  </div>
                </ScrollReveal.Item>
              </div>
              <div className="col-xl-7 col-lg-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ScrollReveal.Item className="ser-card23-card2 ser-anim">
                      <img
                        alt="AI Agency & Technology ReactJs Template"
                        className="hero"
                        src="/assets/images/service/ser23-1.png"
                        width="469"
                        height="436"
                      />
                      <div className="ser-content23">
                        <h4 className="title">
                          We have developed template in two color styles:{" "}
                          <span> dark and light</span>
                        </h4>
                        <p>
                          You can set a separate dark or light version using the
                          data demo setting.
                        </p>
                      </div>
                    </ScrollReveal.Item>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ScrollReveal.Item className="ser-card23-card3 ser-anim">
                      <h4 className="title">
                        Awesome Necessary Shop pages for your business necessary
                      </h4>
                      <p>
                        We created and included shop pages for business
                        necessary. You can use it for different purposes, as
                        example for sale or rent your product online.
                      </p>
                      <img
                        alt="AI Agency & Technology ReactJs Template"
                        className="laptop"
                        src="/assets/images/event/laptop.png"
                        width="506"
                        height="372"
                      />
                    </ScrollReveal.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End service-sec23 */}
      </ScrollReveal.Root>
      {/* service-sec24 */}
      <div className="service-sec24">
        <div className="container2">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <ScrollReveal.Root
                from={{ x: -100, opacity: 0 }}
                to={{ x: 0, opacity: 1 }}
                duration={1}
                ease="power3.out"
                scrollTrigger={{ start: "top 85%", once: true }}
              >
                <ScrollReveal.Item className="ser-content24">
                  <h4 className="title">Built-in Top Technology</h4>
                  <div className="ser-info24">
                    {previewTechLinks.map((item) => (
                      <div key={item.name} className="ser-link24">
                        <div className="ser-img24">
                          <img
                            alt={item.name}
                            src={item.imageSrc}
                            width={item.imageWidth}
                            height={item.imageHeight}
                          />
                        </div>
                        <h4 className="name">{item.name}</h4>
                      </div>
                    ))}
                  </div>
                </ScrollReveal.Item>
              </ScrollReveal.Root>
            </div>
            <div className="col-lg-3 col-sm-12 col-sm-12">
              <ScrollReveal.Root
                from={{ x: 100, opacity: 0 }}
                to={{ x: 0, opacity: 1 }}
                duration={1}
                ease="power3.out"
                scrollTrigger={{ start: "top 85%", once: true }}
              >
                <ScrollReveal.Item className="funfact-content24">
                  <div className="counter-box24">
                    <Counter max={82} extraClass="percent-counter" />
                    <span className="counter-text">+</span>
                  </div>
                  <h4 className="title">All Dark &amp; Light Pages </h4>
                </ScrollReveal.Item>
              </ScrollReveal.Root>
            </div>
          </div>
        </div>
      </div>
      {/* End service-sec24 */}
    </section>
  );
}

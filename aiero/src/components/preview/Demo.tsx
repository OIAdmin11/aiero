import { Link } from "react-router-dom";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { demoListItems, demoCards } from "@/data/demo";
import type { DemoCardItem } from "@/data/demo";
import Counter from "../common/Counter";

type HoverState = {
  card: DemoCardItem;
  x: number;
  y: number;
};

const OFFSET = 10;

export default function Demo() {
  const [hover, setHover] = useState<HoverState | null>(null);

  const handleEnter = useCallback((card: DemoCardItem, e: React.MouseEvent) => {
    setHover({ card, x: e.clientX, y: e.clientY });
  }, []);

  const handleMove = useCallback((e: React.MouseEvent) => {
    setHover((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null));
  }, []);

  const handleLeave = useCallback(() => {
    setHover(null);
  }, []);

  const hoverPortal =
    typeof document !== "undefined" &&
    hover &&
    createPortal(
      <div
        className="demo-hover show"
        style={{
          left: hover.x + OFFSET,
          top: hover.y + OFFSET,
        }}
      >
        <span className="demo-num">{hover.card.demoNum}</span>
        <h4 className="demo-title">{hover.card.demoTitle}</h4>
      </div>,
      document.body,
    );

  return (
    <section id="demo" className="demo-sec">
      <div className="container2">
        <div className="title-area3">
          <div className="funfact-content25">
            <div className="counter-box25">
              <Counter max={36} extraClass="percent-counter" />
              <span className="counter-text">+</span>
            </div>
            <h4 className="title">
              WOW! Meet incredable <br />
              &amp; creative demo pages
            </h4>
          </div>
          <ul className="demo-list">
            {demoListItems.map((item) => (
              <li key={item.label} className={item.liClassName}>
                <i className="fontello icon-button-arrow-down" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <ScrollReveal.Root
            from={{ y: 80, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            duration={0.8}
            ease="power3.out"
            staggerDelay={0.03}
            scrollTrigger={{ start: "top 95%", end: "bottom 80%", once: true }}
          >
            {demoCards.map((card) => (
              <div key={card.id} className="col-lg-6">
                <ScrollReveal.Item
                  className={card.cardClassName ?? "demo-img"}
                  onMouseEnter={(e) => handleEnter(card, e)}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    to={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={card.demoTitle}
                      src={card.imageSrc}
                      width={card.imageWidth}
                      height={card.imageHeight}
                    />
                  </Link>
                </ScrollReveal.Item>
              </div>
            ))}
          </ScrollReveal.Root>
          <div className="col-lg-6">
            <div className="demo-content">
              <h4 className="title">
                A lot of new pages soon...
                <br />
                We are working on it!
              </h4>
            </div>
          </div>
        </div>
      </div>
      {hoverPortal}
    </section>
  );
}

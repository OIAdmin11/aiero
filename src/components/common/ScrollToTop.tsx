import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useLenisRef } from "@/context/LenisContext";

const SCROLL_THRESHOLD = 200;

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenisRef = useLenisRef();
  const [visible, setVisible] = useState(false);

  // Route change: go to top unless the URL targets a hash section.
  useEffect(() => {
    const lenis = lenisRef?.current;
    if (hash) {
      const targetId = hash.replace(/^#/, "");
      const scrollToTarget = () => {
        const target = document.getElementById(targetId);
        if (!target) return;

        if (lenis) {
          lenis.scrollTo(target, { immediate: true, force: true });
        } else {
          target.scrollIntoView({ block: "start", behavior: "auto" });
        }
      };

      window.requestAnimationFrame(scrollToTarget);
      return;
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash, lenisRef]);

  // Show/hide button
  useEffect(() => {
    const updateFromWindow = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    updateFromWindow();
    window.addEventListener("scroll", updateFromWindow, { passive: true });

    let lenisOff: (() => void) | undefined;
    const timerId = setTimeout(() => {
      const lenis = lenisRef?.current;
      if (lenis) {
        const onScroll = ({ scroll }: { scroll: number }) => {
          setVisible(scroll > SCROLL_THRESHOLD);
        };
        lenis.on("scroll", onScroll);
        lenisOff = () => lenis.off("scroll", onScroll);
      }
    }, 150);

    return () => {
      window.removeEventListener("scroll", updateFromWindow);
      clearTimeout(timerId);
      lenisOff?.();
    };
  }, [lenisRef]);

  // ✅ Button click: smooth scroll, NOT immediate
  const handleClick = useCallback(() => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        force: true,
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [lenisRef]);

  return (
    <button
      type="button"
      title="Go to top"
      id="scrollBtn"
      aria-label="Scroll to top"
      onClick={handleClick}
      style={{ display: visible ? "block" : "none" }}
    >
      <i className="fas fa-angle-up" aria-hidden />
    </button>
  );
}

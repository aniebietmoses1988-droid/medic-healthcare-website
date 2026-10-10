
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) {
      return;
    }

    const sectionId = hash.slice(1);
    let attempts = 0;
    let animationFrame;

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      attempts += 1;

      if (attempts < 30) {
        animationFrame = requestAnimationFrame(scrollToSection);
      }
    };

    animationFrame = requestAnimationFrame(scrollToSection);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [pathname, hash]);

  return null;
}

export default ScrollToSection;

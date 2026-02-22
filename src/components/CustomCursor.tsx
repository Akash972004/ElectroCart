import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const gradient = gradientRef.current;

    if (!cursorDot || !cursorOutline || !gradient) return;

    // Check initial dark mode state
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
      if (!isDark) {
        gradient.style.opacity = "0";
      }
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let gradientX = 0;
    let gradientY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const animateOutline = () => {
      const delay = 0.15;
      const gradientDelay = 0.08;

      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      gradientX += (mouseX - gradientX) * gradientDelay;
      gradientY += (mouseY - gradientY) * gradientDelay;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      gradient.style.left = `${gradientX}px`;
      gradient.style.top = `${gradientY}px`;

      requestAnimationFrame(animateOutline);
    };

    const handleMouseEnter = () => {
      const isDark = document.documentElement.classList.contains("dark");
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";
      if (isDark) {
        gradient.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
      gradient.style.opacity = "0";
    };

    const handleMouseDown = () => {
      const isDark = document.documentElement.classList.contains("dark");
      cursorDot.style.transform = "translate(-50%, -50%) scale(0.8)";
      cursorOutline.style.transform = "translate(-50%, -50%) scale(0.9)";
      if (isDark) {
        gradient.style.transform = "translate(-50%, -50%) scale(0.8)";
      }
    };

    const handleMouseUp = () => {
      const isDark = document.documentElement.classList.contains("dark");
      cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
      if (isDark) {
        gradient.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    const handleLinkHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        const isDark = document.documentElement.classList.contains("dark");
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)";
        if (isDark) {
          gradient.style.transform = "translate(-50%, -50%) scale(1.3)";
        }
      }
    };

    const handleLinkLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        const isDark = document.documentElement.classList.contains("dark");
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        if (isDark) {
          gradient.style.transform = "translate(-50%, -50%) scale(1)";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseover", handleLinkHover);
    document.body.addEventListener("mouseout", handleLinkLeave);

    animateOutline();

    // Hide default cursor
    document.body.style.cursor = "none";
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseover", handleLinkHover);
      document.body.removeEventListener("mouseout", handleLinkLeave);

      document.body.style.cursor = "auto";
      allElements.forEach((el) => {
        (el as HTMLElement).style.cursor = "auto";
      });
    };
  }, []);

  return (
    <>
      {/* Gradient Effect - Only visible in dark mode */}
      <div
        ref={gradientRef}
        className="fixed w-96 h-96 pointer-events-none z-[9997] opacity-0 transition-all duration-500 ease-out hidden dark:block"
        style={{
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full pointer-events-none z-[9999] opacity-0 transition-transform duration-150 ease-out"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
      {/* Cursor Outline */}
      <div
        ref={cursorOutlineRef}
        className="fixed w-8 h-8 border-2 border-blue-500 dark:border-blue-400 rounded-full pointer-events-none z-[9998] opacity-0 transition-transform duration-300 ease-out"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default CustomCursor;

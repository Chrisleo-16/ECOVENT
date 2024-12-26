"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (!isVisible) {
    return null;
  }
  return (
    <Button className="fixed bottom-4 right-4 rounded-full p-2 transition-opacity duration-200 hover:opacity-80 focus:outline-none focus:ring-offset-2 focus:ring-primary"
    onClick={scrollToTop}
    aria-label="Back to top">
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

"use client";

import { useEffect } from "react";

export const useToggleScrolled = () => {
  useEffect(() => {
    const selectBody = document.body;
    const selectHeader = document.querySelector("#header");

    if (
      !selectHeader?.classList.contains("scroll-up-sticky") &&
      !selectHeader?.classList.contains("sticky-top") &&
      !selectHeader?.classList.contains("fixed-top")
    ) {
      return;
    }

    const toggleScrolled = () => {
      console.log(window.scrollY);
      if (window.scrollY > 1) {
        selectBody.classList.add("scrolled");
      } else {
        selectBody.classList.remove("scrolled");
      }
    };

    toggleScrolled();

    window.addEventListener("scroll", toggleScrolled);

    return () => {
      window.removeEventListener("scroll", toggleScrolled);
    };
  }, []);
};

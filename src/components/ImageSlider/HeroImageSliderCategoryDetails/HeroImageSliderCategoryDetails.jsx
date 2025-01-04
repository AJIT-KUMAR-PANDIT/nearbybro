"use client";

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const HeroImageSliderCategoryDetails = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Import CSS dynamically
    import("@splidejs/splide/css");

    // Check if splide element exists and no instance is mounted
    if (
      splideRef.current &&
      !splideRef.current.classList.contains("is-initialized")
    ) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 1,
        gap: "1rem",
        autoScroll: {
          speed: 2,
          pauseOnHover: true,
        },
        arrows: false,
        pagination: false,
      });

      splide.mount({ AutoScroll });

      // Cleanup on unmount
      return () => {
        if (splide) {
          splide.destroy();
        }
      };
    }
  }, []);

  const streetViewUrls = [
    "https://www.google.com/maps/embed?pb=!1m0!4v1649184000000!6m8!1m7!1sCAoSLEFGMVFpcE9IU2x6OVhXYzZFd3c5ODAtUk9kdE5MeHJaNHBQTFdMWFl5WlpR!2m2!1d37.4219999!2d-122.0840575!3f90!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!1m0!4v1649184000000!6m8!1m7!1sCAoSLEFGMVFpcE9IU2x6OVhXYzZFd3c5ODAtUk9kdE5MeHJaNHBQTFdMWFl5WlpR!2m2!1d48.8588443!2d2.2943506!3f90!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!1m0!4v1649184000000!6m8!1m7!1sCAoSLEFGMVFpcE9IU2x6OVhXYzZFd3c5ODAtUk9kdE5MeHJaNHBQTFdMWFl5WlpR!2m2!1d40.6892494!2d-74.0445004!3f90!4f0!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!1m0!4v1649184000000!6m8!1m7!1sCAoSLEFGMVFpcE9IU2x6OVhXYzZFd3c5ODAtUk9kdE5MeHJaNHBQTFdMWFl5WlpR!2m2!1d51.5007292!2d-0.1246254!3f90!4f0!5f0.7820865974627469",
  ];

  return (
    <div className="w-full">
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list  ">
            {streetViewUrls.map((url, index) => (
              <li key={index} className="splide__slide flex">
                <iframe
                  src={url}
                  className="w-full h-[240px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSliderCategoryDetails;

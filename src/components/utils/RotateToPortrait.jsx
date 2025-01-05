"use client";

import React, { useState, useEffect } from "react";

const RotateToPortrait = () => {
  const [isLandscapeMobile, setIsLandscapeMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const isLandscape = window.innerWidth > window.innerHeight;
      setIsLandscapeMobile(isMobile && isLandscape);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  if (!isLandscapeMobile) return null; // Show nothing if not in mobile landscape mode

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <svg
        className="animate-spin w-24 h-24 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <path d="M4 9v6h16V9"></path>
        <path d="M10 18l-2 2"></path>
        <path d="M14 18l2 2"></path>
      </svg>
      <p className="text-lg font-semibold">
        Please rotate your device to portrait mode
      </p>
    </div>
  );
};

export default RotateToPortrait;

// components/ui/Button2.jsx

import React from "react";

export function Button2({
  children,
  variant = "solid", // solid by default
  className = "",
  ...props
}) {
  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-full focus:outline-none";
  const solidStyles =
    "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-600";
  const outlineStyles =
    "border border-purple-600 text-purple-600 hover:bg-purple-100 focus:ring-2 focus:ring-purple-600";

  const variantStyles = variant === "outline" ? outlineStyles : solidStyles;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

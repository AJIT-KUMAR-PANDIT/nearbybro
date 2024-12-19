import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // Optional: For conditional classnames

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none";

  const variants = {
    default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100",
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    icon: "p-2",
    sm: "px-2 py-1 text-xs",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "ghost", "primary", "danger"]),
  size: PropTypes.oneOf(["default", "icon", "sm", "lg"]),
  className: PropTypes.string,
};

export default Button;

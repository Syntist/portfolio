import React from "react";

export const CustomProgress = ({ className, style, size = "md" }) => {
  const sizeClasses = {
    sm: "h-3 w-3 border-2",
    md: "h-4 w-4 border-2", 
    lg: "h-5 w-5 border-2",
    xl: "h-6 w-6 border-[3px]",
    "2xl": "h-8 w-8 border-[3px]"
  };

  return (
    <div
      className={`animate-spin ${sizeClasses[size]} border-white border-t-transparent rounded-full ${className}`}
      style={style}
    />
  );
};

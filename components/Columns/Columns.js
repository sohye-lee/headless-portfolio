import React from "react";

export default function Columns({ isStackedOnMobile, className, children }) {
  return (
    <div className="my-4 w-full ">
      <div
        className={`w-full  gap-[20px] lg:gap-[24px] mx-auto ${
          isStackedOnMobile ? "block md:flex " : "flex"
        } items-stretch ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

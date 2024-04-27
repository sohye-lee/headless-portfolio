import React from "react";
import { theme } from "theme";
import { getColumnsColor, getPadding } from "utils/blockstyles";

export default function Columns({
  isStackedOnMobile,
  className,
  backgroundColor,
  style,
  children,
}) {
  return (
    <div className="my-4 w-full ">
      <div
        style={{
          backgroundColor: theme[backgroundColor],
          paddingTop: `${style?.spacing?.padding?.top?.split("|")[2]}px`,
          paddingBottom: `${style?.spacing?.padding?.bottom?.split("|")[2]}px`,
          paddingLeft: `${style?.spacing?.padding?.left?.split("|")[2]}px`,
          paddingRight: `${style?.spacing?.padding?.right?.split("|")[2]}px`,
        }}
        className={`w-full  space-x-6 pr-6 mx-auto ${
          isStackedOnMobile ? "block md:flex " : "flex"
        } items-stretch ${className} `}
      >
        {children}
      </div>
    </div>
  );
}

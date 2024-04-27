import React from "react";
import { theme } from "theme";

export default function column({
  width,
  children,
  className,
  backgroundColor,
  style,
}) {
  const widthValue = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  const paddingTop = style?.spacing?.padding?.top;
  const paddingBottom = style?.spacing?.padding?.bottom;
  const paddingLeft = style?.spacing?.padding?.left;
  const paddingRight = style?.spacing?.padding?.right;

  return (
    <div
      className={`w-full ${className}`}
      style={{
        ...widthValue,
        backgroundColor: theme[backgroundColor],
        paddingTop: `${paddingTop?.split("|")[2]}px`,
        paddingBottom: `${paddingBottom?.split("|")[2]}px`,
        paddingLeft: `${paddingLeft?.split("|")[2]}px`,
        paddingRight: `${paddingRight?.split("|")[2]}px`,
      }}
    >
      {children}
    </div>
  );
}

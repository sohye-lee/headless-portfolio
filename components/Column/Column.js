import React from "react";

export default function column({ width, children, className }) {
  const widthValue = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div className={`py-2 w-full ${className}`} style={widthValue}>
      {children}
    </div>
  );
}

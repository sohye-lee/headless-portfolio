import React from "react";
import { getAbsoluteUrls } from "utils/absoluteUrls";
import { getCusstomFontSize, getTextAlign } from "utils/fonts";

export default function Paragraph({
  content,
  textAlign = "left",
  textColor,
  fontSize,
  className,
}) {
  return (
    <p
      className={`font-body mb-2 
      ${getTextAlign(textAlign)} ${getCusstomFontSize(fontSize)} ${className}`}
      style={{
        color: textColor,
        fontSize: fontSize,
        textAlign: getTextAlign(textAlign),
      }}
      dangerouslySetInnerHTML={{ __html: getAbsoluteUrls(content) }}
    />
  );
}

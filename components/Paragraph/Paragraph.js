import React from "react";
import { getAbsoluteUrls } from "utils/absoluteUrls";
import {
  getCusstomFontSize,
  getCustomTextColor,
  getTextAlign,
} from "utils/fonts";

export default function Paragraph({
  content,
  textAlign = "left",
  textColor,
  fontSize,
}) {
  return (
    <p
      className={`font-body mb-4 
      ${getTextAlign(textAlign)} ${getCusstomFontSize(fontSize)}`}
      style={{
        color: textColor,
        fontSize: fontSize,
        textAlign: getTextAlign(textAlign),
      }}
      dangerouslySetInnerHTML={{ __html: getAbsoluteUrls(content) }}
    />
  );
}

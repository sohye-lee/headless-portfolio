import React from "react";
import { getAbsoluteUrls } from "utils/absoluteUrls";
import {
  getCustomFontSize,
  getParagraphFontSizeByString,
  getTextAlign,
} from "utils/fonts";

export default function Paragraph({
  content,
  textAlign = "left",
  textColor,
  fontSize,
  customFontSize,
  className,
}) {
  return (
    <p
      className={`font-body mb-2 
      ${getTextAlign(textAlign)} ${
        customFontSize && getCustomFontSize(customFontSize)
      } 
      ${fontSize && getParagraphFontSizeByString(fontSize)}
      ${className}`}
      style={{
        color: textColor,
        fontSize: fontSize,
        textAlign: getTextAlign(textAlign),
      }}
      dangerouslySetInnerHTML={{ __html: getAbsoluteUrls(content) }}
    />
  );
}

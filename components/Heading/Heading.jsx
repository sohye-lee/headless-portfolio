import React from "react";
import {
  getCusstomFontSize,
  getHeadingFontSize,
  getTextAlign,
} from "utils/fonts";

export default function Heading({
  textAlign,
  fontSize,
  content,
  className,
  level = 3,
}) {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading   uppercase font-semibold  ${getHeadingFontSize(
      level
    )}  ${getTextAlign(textAlign)} -spacing-[0.2em] ${className}`,
  });

  return tag;
}

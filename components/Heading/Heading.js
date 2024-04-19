import React from "react";
import {
  getCusstomFontSize,
  getHeadingFontSize,
  getTextAlign,
} from "utils/fonts";

export default function Heading({ textAlign, fontSize, content, level = 3 }) {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading  mx-auto uppercase font-semibold mb-5  ${getHeadingFontSize(
      level
    )} ${fontSize && getCusstomFontSize(fontSize)} ${getTextAlign(
      textAlign
    )} -spacing-[0.2em]`,
  });

  return tag;
}

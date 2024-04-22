import React from "react";
import {
  getCusstomFontSize,
  getHeadingFontSize,
  getHeadingFontSizeByString,
  getTextAlign,
} from "utils/fonts";

export default function Heading({
  textAlign,
  fontSize,
  customFontSize,
  content,
  className,
  level = "",
}) {
  // const tag = React.createElement(`h${level}`, {
  //   dangerouslySetInnerHTML: { __html: content },
  //   className: `font-heading   uppercase font-semibold   ${fontSize && getHeadingFontSizeByString(fontSize)} ${getTextAlign(
  //     textAlign
  //   )} -spacing-[0.2em] ${className}`,
  // });
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    style: { fontSize: customFontSize },
    className: `font-heading   uppercase font-medium   ${
      fontSize && getHeadingFontSizeByString(fontSize)
    }  ${getTextAlign(textAlign)} -spacing-[0.2em] ${className}`,
  });

  return tag;
}

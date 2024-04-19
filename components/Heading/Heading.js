import React from "react";
import { getFontSize, getTextAlign } from "utils/fonts";

export default function Heading({ textAlign, content, level = 3 }) {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-4xl mx-auto my-5 ${getFontSize(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  console.log("textalign:", textAlign);

  return tag;
}

import React from "react";
import { getParagraphFontSizeByString } from "utils/fonts";

export default function ListItem({ fontSize, fontWeight, content }) {
  const tag = React.createElement(`li`, {
    dangerouslySetInnerHTML: { __html: content },
    style: { fontWeight: fontWeight },
    className: `  ${fontSize && getParagraphFontSizeByString(fontSize)}      `,
  });
  return (
    // <li
    //   style={{ fontWeight: fontWeight }}
    //   className={`${fontSize && getParagraphFontSizeByString(fontSize)}`}
    // >
    //   {content}
    // </li>
    tag
  );
}

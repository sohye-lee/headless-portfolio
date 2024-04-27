import React from "react";

export default function Html({ htmlContent }) {
  const tag = React.createElement(`div`, {
    dangerouslySetInnerHTML: { __html: htmlContent },
  });
  return tag;
}

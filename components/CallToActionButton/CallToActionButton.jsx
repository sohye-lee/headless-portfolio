import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";
import React from "react";

export default function CallToActionButton({
  align,
  link,
  textLink,
  label,
  classname,
}) {
  return (
    <div className={`text-${align}`}>
      <ButtonLink
        link={textLink || link}
        classname={`btn inline-block py-3 px-8 ${classname}`}
        label={label}
      />
    </div>
  );
}

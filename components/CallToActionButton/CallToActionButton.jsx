import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";
import React from "react";

export default function CallToActionButton({ align, link, label }) {
  return (
    <div className={`text-${align}`}>
      <ButtonLink
        link={link}
        className="btn inline-block py-3 px-8"
        label={label}
      />
      {/* <Link href={link} className="btn inline-block py-3 px-8">
        {label}
      </Link> */}
    </div>
  );
}

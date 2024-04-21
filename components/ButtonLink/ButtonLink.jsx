import Link from "next/link";
import React from "react";

export default function ButtonLink({ link, label, target, ...rest }) {
  return (
    <Link href={link} target={target} className="btn" {...rest}>
      {label}
    </Link>
  );
}

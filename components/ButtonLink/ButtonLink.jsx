import Link from "next/link";
import React from "react";

export default function ButtonLink({ link, label, target, icon, ...rest }) {
  return (
    <Link
      href={link}
      target={target}
      className="btn gap-2"
      {...rest}
      icon={icon}
    >
      {icon} {label}
    </Link>
  );
}

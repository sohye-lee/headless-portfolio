import Link from "next/link";
import React from "react";

export default function ButtonLink({
  link,
  label,
  target,
  icon,
  classname,
  ...rest
}) {
  return (
    <Link
      {...rest}
      href={link}
      target={target}
      className={`btn gap-2 ${classname}`}
      icon={icon}
    >
      {icon} {label}
    </Link>
  );
}

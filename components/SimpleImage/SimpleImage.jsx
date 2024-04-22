import Image from "next/image";
import React from "react";

export default function SimpleImage({ src, className }) {
  return (
    <Image
      src={src}
      alt="image"
      width={1000}
      height="699"
      className={` ${className}`}
    />
  );
}

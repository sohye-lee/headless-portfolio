import React from "react";

export default function Input({ ...rest }) {
  return (
    <input
      className="relative text-md font-extralight t z-1 border-b min-w-[300px] w-full pr-6 border-b-black py-2 placeholder:text-gray-400 text-black outline-none"
      {...rest}
    />
  );
}

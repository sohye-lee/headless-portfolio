import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import Image from "next/image";
import React from "react";

export default function Cover({ backgroundUrl, children, innerBlocks }) {
  return (
    <div
      className={`w-screen h-[75vh] bg-stone-800 flex justify-center items-center flex-col relative px-4`}
    >
      <Image
        src={backgroundUrl}
        alt="background"
        fill
        className="  z-0 min-w-full min-h-full  top-[50%] left-[50%] -transform-y-[50%] -transform-x-[50%] object-cover bg-blend-soft-light"
      />
      <div className="relative z-10 text-white ">
        {/* {innerBlocks && <BlockRenderer blocks={innerBlocks} />} */}
        {children}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Cover({ backgroundUrl, children, className }) {
  return (
    <div
      className={`w-full h-[60vh] bg-stone-800 flex justify-center items-center flex-col relative px-4 ${className}`}
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

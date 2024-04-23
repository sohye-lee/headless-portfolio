import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Results({ portfolios }) {
  return (
    <div className="w-full grid grid-cols-2 pt-8 gap-2">
      {portfolios &&
        portfolios.map((p, i) => (
          <div key={i} className="">
            <div className="w-full aspect-video overflow-hidden relative border">
              <Image
                alt={p.title}
                src={p.featuredImage.node.sourceUrl}
                fill
                className=" object-cover"
              />
            </div>
            <div className="pt-5 flex flex-col gap-2">
              <p className="uppercase text-xs flex items-center gap-1">
                {p.portfolioFeatures.mainRole.map((role) => (
                  <span
                    key={role}
                    className="border border-gray-700 text-gray-700 px-2 py-[2px] rounded-[30px]"
                  >
                    {role}
                  </span>
                ))}
              </p>
              <Link href={p.uri} className="uppercase text-xl">
                {p.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

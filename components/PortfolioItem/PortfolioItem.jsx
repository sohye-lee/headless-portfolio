import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PortfolioItem({ portfolio }) {
  return (
    <div className="w-full group">
      <Link
        href={portfolio.uri}
        className="w-full block aspect-video overflow-hidden relative border"
      >
        <Image
          alt={portfolio.title}
          src={portfolio.featuredImage.node.sourceUrl}
          fill
          className=" object-cover"
        />
      </Link>
      <div className="pt-5 pb-8 flex flex-col gap-2">
        <p className="uppercase text-xs flex items-center gap-1">
          {portfolio.portfolioFeatures.mainRole.map((role) => (
            <span
              key={role}
              className="border border-gray-700 text-gray-700 px-2 py-[2px] rounded-[30px]"
            >
              {role}
            </span>
          ))}
        </p>
        <div>
          <div className="inline-block relative">
            <Link
              href={portfolio.uri}
              className="uppercase text-3xl group-hover:italic  "
            >
              {portfolio.title}
            </Link>
            <div className="h-[2px] absolute left-0 w-full top-[50%] bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-left"></div>
          </div>
          <p className="text-2xl font-light ">
            {portfolio.portfolioFeatures.tagline}
          </p>
        </div>
        <div className="leading-1 w-full pr-3 flex flex-wrap">
          {portfolio.portfolioFeatures.stack.map((s, i) => (
            <span className="text-sm text-gray-500 pr-2" key={i}>
              #{s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

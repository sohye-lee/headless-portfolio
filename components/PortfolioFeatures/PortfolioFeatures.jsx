import Link from "next/link";
import React from "react";

export default function PortfolioFeatures({
  type,
  company,
  stack,
  role,
  main_role,
  link,
  description,
  tagline,
}) {
  return (
    <div className="max-w-5xl">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="uppercase text-4xl italic font-light">{tagline}</h4>
        </div>
        {/* <hr className="w-full" /> */}
        <div>
          <div className="text-gray-600 text-sm uppercase spacing-1 py-3">
            {main_role && main_role.length > 0 && main_role.join(" | ")}
          </div>
          <div>
            <span className="text-2xl">&#x2B22;</span> {type}{" "}
            {company && company != "" && <span>| {company}</span>}
          </div>

          <div>
            <span className="text-2xl">&#x2B22;</span> {role}
          </div>
          <div>
            <span className="text-2xl">&#x2B22;</span> Developed with{" "}
            {stack.join(", ")}
          </div>
        </div>
        <p>{description}</p>

        <div className="mt-5 flex items-center gap-3">
          <Link href={link} className="btn white inline-block" target="_blank">
            Visit Website
          </Link>
          <Link href="/projects" className="btn white inline-block">
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

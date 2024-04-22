import React from "react";

export default function SectionTitle({ content }) {
  return (
    <div>
      <h2 className="uppercase font-medium text-[45px] lg:text-[50px]">
        {content}
      </h2>
    </div>
  );
}

import React from "react";
export default function Pagination({ totalPages, currentPage, onPageClick }) {
  return (
    <div className="flex items-center justify-center gap-3 pb-12">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          key={i}
          className={` w-8 h-8 border-b   flex items-center justify-center cursor-pointer   hover:text-black hover:border-black transition ${
            i == currentPage
              ? " border-black text-black"
              : "text-gray-400 border-transparent"
          }`}
          onClick={() => onPageClick(i + 1)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

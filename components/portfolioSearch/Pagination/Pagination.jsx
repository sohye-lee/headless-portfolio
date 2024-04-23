import React from "react";
import { AiOutlineSwapRight, AiOutlineSwapLeft } from "react-icons/ai";
export default function Pagination({ totalPages, currentPage, onPageClick }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* <div
        className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 ${
          currentPage <= 0 ? "text-gray-400 pointer-events-none" : "text-black"
        }`}
      >
        <AiOutlineSwapLeft size="24" />
      </div> */}
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          key={i}
          className={` w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition ${
            i == currentPage
              ? "border border-black text-black"
              : "text-gray-400"
          }`}
          onClick={() => onPageClick(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      {/* <div
        className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 ${
          currentPage >= totalPages
            ? "text-gray-400 pointer-events-none"
            : "text-black"
        }`}
      >
        <AiOutlineSwapRight size="24" />
      </div> */}
    </div>
  );
}

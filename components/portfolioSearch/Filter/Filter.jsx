import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Filter() {
  return (
    <div>
      <form className="block">
        <div className="relative inline-block">
          <input
            className="relative text-md  font-extralight t z-1 border-b min-w-[300px] pr-6 border-b-black py-2 placeholder:text-gray-200 text-black outline-none"
            placeholder="search"
          />
          <button
            type="submit"
            className="absolute right-0 top-[50%] -translate-y-[50%] z-10"
          >
            <IoIosSearch width={12} />
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center gap-3">
        
      </div>
    </div>
  );
}

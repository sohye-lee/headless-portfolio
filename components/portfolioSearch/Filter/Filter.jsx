import React, { useEffect, useState } from "react";
// import { IoIosColorFilter, IoIosSearch } from "react-icons/io";
import { roleValues, stackValues } from "utils/constants";
import { IoFilter } from "react-icons/io5";
import queryString from "query-string";

export default function Filter({ onSearch }) {
  const [roles, setRoles] = useState([]);
  const [stacks, setStacks] = useState([]);
  const handleFilter = () => {
    onSearch({
      roles,
      stacks,
    });
  };

  useEffect(() => {
    const { stacks: queryStacks, roles: queryRoles } = queryString.parse(
      window.location.search
    );
    queryRoles && setRoles(queryRoles.split(","));
    queryStacks && setStacks(queryStacks.split(","));
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-3">
      {/* <form className="block">
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
      </form> */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {roleValues.map((role) => (
            <div
              key={role}
              className={`cursor-pointer mb-1 border border-black py-[3px] px-2 text-xs spacing-1 uppercase rounded-[50px] hover:bg-gray-100  transition-all duration-500 ${
                roles.includes(role) && "bg-black text-white"
              }`}
              onClick={() =>
                setRoles((prev) =>
                  prev.includes(role)
                    ? [...prev].filter((r) => r != role)
                    : [...prev, role]
                )
              }
            >
              {role}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 max-w-3xl">
          {stackValues.map((stack) => (
            <div
              key={stack}
              className={`cursor-pointer mb-[2px] border border-black py-[3px] px-2 text-xs spacing-1 uppercase rounded-[50px] hover:bg-gray-100   transition-all duration-500 ${
                stacks.includes(stack) && "bg-black text-white"
              }`}
              onClick={() =>
                setStacks((prev) =>
                  prev.includes(stack)
                    ? [...prev].filter((s) => s != stack)
                    : [...prev, stack]
                )
              }
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          className="btn px-8 py-3 flex items-center gap-2"
          onClick={handleFilter}
        >
          Filter
          <IoFilter />
        </button>
      </div>
    </div>
  );
}

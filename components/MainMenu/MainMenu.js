import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "public/images/logo-2.svg";
import { LuArrowDownToLine } from "react-icons/lu";

export default function MainMenu({ items = [] }) {
  return (
    <div className="w-full">
      <div className="px-4 border-b border-b-black bg-white sticky top-0 left-0 py-5 z-50 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-md gap-2  font-medium -ml-3"
        >
          <Image src={Logo} width={30} alt="logo" />
          <span className="flex items-center gap-3 uppercase">SOHYE</span>
          <span className="text-gray-400 hover:text-black">/só·hé/</span>
        </Link>
        <div className="flex items-center space-x-8">
          {items.map((menuItem) => (
            <Link
              href={menuItem.link}
              key={menuItem.id}
              className="uppercase py-2 text-[15px] spacing-1 relative group"
            >
              {menuItem.label}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-all origin-left"></div>
            </Link>
          ))}
        </div>
        <Link
          href=""
          download
          className="bg-black text-white w-8 h-8 flex items-center justify-center  "
        >
          <LuArrowDownToLine width={16} />
        </Link>
      </div>
    </div>
  );
}

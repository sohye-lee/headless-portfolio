import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoMailOpen, IoPhonePortrait } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center gap-5 pt-10 pb-6 absolute bottom-0 left-0">
      <div className="max-w-3xl flex items-center justify-center gap-8">
        <p className="text-gray-600 uppercase text-[12px]">Fairfax, Virginia</p>

        <Link
          href="https://linkedin.com/in/sohyelee"
          target="_blank"
          className="text-gray-600 hover:text-black hover:scale-105 hover:rotate-12"
        >
          <IoLogoLinkedin size="20" />
        </Link>
        <Link
          href="https://github.com/sohye-lee"
          target="_blank"
          className="text-gray-600 hover:text-black hover:scale-105 hover:rotate-12"
        >
          <IoLogoGithub size="20" />
        </Link>
        <Link
          href="mailto:sohyelee@gmail.com"
          className="text-gray-600 hover:text-black hover:scale-105 hover:rotate-12"
        >
          <IoMailOpen size="20" />
        </Link>
        <Link
          href="tel:+15713961662"
          className="text-gray-600 hover:text-black hover:scale-105 hover:rotate-12"
        >
          <IoPhonePortrait size="20" />
        </Link>
      </div>
      <hr className="border-t border-black w-full max-w-2xl h-[1px]" />
      <div>
        <p className="text-[11px] uppercase spacing-2 text-center text-gray-400">
          © Copyright 2024 Sohye Kim
        </p>
      </div>
    </div>
  );
}

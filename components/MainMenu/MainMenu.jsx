import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/images/logo-2.svg";
import { ButtonLink } from "components/ButtonLink";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
import { IoExit } from "react-icons/io5";

export default function MainMenu({ items = [], ctaButton }) {
  const url =
    "http://headless-portfolio.local/wp-content/uploads/2024/04/name.mp3";
  const [audio, setAudio] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  return (
    <div className="w-screen sticky top-0 left-0 z-50 bg-white flex justify-center">
      <div className="px-4 max-w-[1440px] w-full max-auto  ">
        <div className=" border-b border-b-black bg-white top-0 left-0 py-5  flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-md gap-2  font-medium"
          >
            <Image src={Logo} width={30} alt="logo" />
            <span className="flex items-center gap-3 uppercase">SOHYE</span>
            <span
              className="text-gray-400 hover:text-black font-light flex items-center gap-1 cursor-pointer"
              onClick={() => audio.play()}
            >
              /só·hé/
              <BsSoundwave size="16" />
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-7 ">
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
          <div className="">
            {ctaButton && (
              <ButtonLink
                label={ctaButton.label}
                target={ctaButton.target}
                link={ctaButton.link}
                icon={<HiOutlineDocumentArrowDown size={20} />}
                classname="hidden lg:flex py-2"
              />
            )}
            <button
              className="w-6 h-6 bg-black rounded-full animate-pulse block lg:hidden"
              onClick={() => {
                setMobileNavOpen(true);
              }}
            ></button>
          </div>
          {/* MOBILE NAV */}
          {mobileNavOpen && (
            <div
              className={`flex flex-col transition  min-w-[300px] lg:hidden bg-white fixed top-0 right-0 h-screen px-5 py-4 border-l border-l-black`}
            >
              <div
                className="group cursor-pointer py-8 flex justify-end relative"
                onClick={() => setMobileNavOpen(false)}
              >
                <div className="absolute right-0 top-4 w-6 h-[3px] bg-black rotate-45 group-hover:bg-gray-600"></div>
                <div className="absolute right-0 top-4 w-6 h-[3px] bg-black rotate-[135deg] group-hover:bg-gray-600"></div>
              </div>
              {items.map((menuItem) => (
                <div key={menuItem.id}>
                  <Link
                    href={menuItem.link}
                    className="uppercase py-2 my-2 text-[18px] spacing-1 relative group inline-block"
                  >
                    {menuItem.label}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-all origin-left"></div>
                  </Link>
                </div>
              ))}
              {ctaButton && (
                <div>
                  <ButtonLink
                    label={ctaButton.label}
                    target={ctaButton.target}
                    link={ctaButton.link}
                    icon={<HiOutlineDocumentArrowDown size={20} />}
                    classname="mt-5 inline-flex py-2"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

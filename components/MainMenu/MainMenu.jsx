import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/images/logo-2.svg";
import { ButtonLink } from "components/ButtonLink";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
// import audio from "public/name.mp3";
// import Sound from "public/name.mp3";

export default function MainMenu({ items = [], ctaButton }) {
  const url =
    "http://headless-portfolio.local/wp-content/uploads/2024/04/name.mp3";
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  const start = async () => {
    await audio.play();
  };
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
              {/* <audio hidden id="player">
                <source
                  src="https://docs.google.com/uc?export=download&id=1wD7Tktzcv9odVtvBw17PBW1otLbggPCA"
                  type="audio/mp3"
                />
              </audio> */}
            </span>
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
          {ctaButton && (
            <ButtonLink
              label={ctaButton.label}
              target={ctaButton.target}
              link={ctaButton.link}
              icon={<HiOutlineDocumentArrowDown size={20} />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

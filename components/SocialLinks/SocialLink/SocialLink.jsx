import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoMailOpen, IoPhonePortrait } from "react-icons/io5";

export default function SocialLink({ service, rel }) {
  switch (service) {
    case "linkedin": {
      return (
        <Link
          href={rel || ""}
          target="_blank"
          className="text-gray-600 hover:text-black hover:scale-105 "
        >
          <IoLogoLinkedin size="22" />
        </Link>
      );
    }
    case "github": {
      return (
        <Link
          href={rel || ""}
          target="_blank"
          className="text-gray-600 hover:text-black hover:scale-105 "
        >
          <IoLogoGithub size="22" />
        </Link>
      );
    }
    case "mail": {
      return (
        <Link
          href={rel || ""}
          className="text-gray-600 hover:text-black hover:scale-105 "
        >
          <IoMailOpen size="22" />
        </Link>
      );
    }
    default: {
      return <></>;
    }
  }
  return <div></div>;
}

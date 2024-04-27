import React from "react";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoWordpress,
} from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import {
  SiDotnet,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function StackList({ stack }) {
  const size = 30;
  const icons = {
    react: <IoLogoReact size={size} />,
    "next.js": <SiNextdotjs size={size} />,
    typescript: <SiTypescript size={size} />,
    tailwindcss: <SiTailwindcss size={size} />,
    javascript: <IoLogoJavascript size={size} />,
    jquery: <SiJquery size={size} />,
    css: <IoLogoCss3 size={size} />,
    html: <IoLogoHtml5 size={size} />,
    bootstrap: <FaBootstrap size={size} />,
    "node.js": <SiNodedotjs size={size} />,
    wordpress: <IoLogoWordpress size={size} />,
    php: <SiPhp size={size + 10} />,
    ".net": <SiDotnet size={size} />,
    sql: <SiPostgresql size={size} />,
    mongodb: <SiMongodb size={size} />,
  };

  const renderStack = stack.map((s, i) => {
    if (Object.keys(icons).includes(s.toLowerCase()))
      return <span key={i}>{icons[s.toLowerCase()]}</span>;
  });

  return (
    <div className="flex items-center gap-4 flex-wrap px-4 max-w-[450px]">
      {renderStack}
    </div>
  );
}

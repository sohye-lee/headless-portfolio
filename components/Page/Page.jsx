// import { BlockRenderer } from "components/BlockRenderer";
// import { MainMenu } from "components/MainMenu";
import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import React from "react";

export default function Page(props) {
  return (
    <div className="text-[18px] flex flex-col items-center w-full">
      <div className="px-4 max-w-[1440px] w-full ">
        <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
        <div className="pt-16 w-full ">
          <BlockRenderer blocks={props.blocks} />
        </div>
      </div>
    </div>
  );
}

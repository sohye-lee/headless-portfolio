import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { PageTitle } from "components/PageTitle";
import React from "react";

export default function Page(props) {
  console.log(props);
  return (
    <div className="text-[18px] flex flex-col items-center w-full">
      <div className="px-4 max-w-[1440px] w-full ">
        <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
        <div className=" w-full">
          {props.pageTitle !== "Home" && (
            <PageTitle pageTitle={props.pageTitle} />
          )}
          <div className="py-8 w-full" id="main">
            <BlockRenderer blocks={props.blocks} />
          </div>
        </div>
      </div>
    </div>
  );
}

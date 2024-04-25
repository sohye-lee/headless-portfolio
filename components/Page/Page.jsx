import { BlockRenderer } from "components/BlockRenderer";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { PageTitle } from "components/PageTitle";
import React from "react";

export default function Page(props) {
  return (
    <div className="text-[18px] flex flex-col items-center w-full min-h-screen relative">
      <div className="px-4 max-w-[1440px] w-full pb-20">
        <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
        <div className=" w-full">
          {props.pageTitle !== "Home" && (
            <PageTitle pageTitle={props.pageTitle} />
          )}
          <div className="py-8 w-full" id="main">
            <BlockRenderer blocks={props.blocks} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

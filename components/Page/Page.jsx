import { BlockRenderer } from "components/BlockRenderer";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { PageTitle } from "components/PageTitle";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Page(props) {
  return (
    <>
      {/* <Head>
        <title>{props.pageTitle} | Sohye Kim</title>
        <meta name="description" content={props.seo?.metaDesc} />
      </Head> */}
      <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
      <div className="text-[18px] flex flex-col items-center w-full min-h-screen relative z-10 pt-10">
        <div className="px-4 max-w-[1440px] w-full pb-20 gap-0">
          {props.featuredImage && props.pageTitle !== "Home" && (
            <div className="w-full relative z-10">
              <Image
                className="object-fit "
                src={props.featuredImage}
                alt="featured image"
                width="2000"
                height="1000"
              />
            </div>
          )}
          <div className=" w-full pb-8 relative z-10">
            {props.pageTitle !== "Home" && (
              <PageTitle pageTitle={props.pageTitle} />
            )}
            <div className="pb-8 pt-2 w-full" id="main">
              <BlockRenderer blocks={props.blocks} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

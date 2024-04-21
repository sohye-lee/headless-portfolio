import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default function Page(props) {
  console.log(props);
  return (
    <div className="text-[18px] flex flex-col items-center w-full">
      <div className="px-4 max-w-[1440px] w-full ">
        <MainMenu items={props.mainMenuItems} ctaButton={props.ctaButton} />
        <div className="pt-16 w-full ">
          {props.pageTitle}
          <BlockRenderer blocks={props.blocks} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking",
  };
};

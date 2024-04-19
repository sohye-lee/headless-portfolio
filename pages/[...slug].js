import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { transformBlocks } from "utils/transformBlocks";

export default function Page(props) {
  console.log(props);
  return (
    <div className="px-4 text-[18px]">
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const uri = `/${context.params.slug.join("/")}/`;
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks(postTemplate: false)
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  return {
    props: {
      data,
      blocks: transformBlocks(data.nodeByUri.blocks),
      title: data.nodeByUri.title,
      uri,
    },
  };
};

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

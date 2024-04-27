import { gql } from "@apollo/client";
import client from "client";
import { mapMenuItems } from "./mapMenuItems";
import { transformBlocks } from "./transformBlocks";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug
    ? `/${context.params.slug?.join("/")}/`
    : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks(
              htmlContent: true
              # originalContent: true
              # dynamicContent: true
              attributes: true
              postTemplate: false
            )
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Portfolio {
            id
            title
            blocks(postTemplate: false)
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }

        acfOptionsMainMenu {
          Menu {
            ctaButton {
              label
              link {
                ... on Page {
                  uri
                }
                ... on Post {
                  uri
                }
                ... on MediaItem {
                  mediaItemUrl
                }
              }
              target
            }
            menuItems {
              menuItem {
                label
                link {
                  ... on Page {
                    uri
                  }
                }
              }
              subItems {
                label
                link {
                  ... on Page {
                    uri
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  console.log("Page Data:", data);

  return {
    props: {
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.Menu.menuItems),
      ctaButton: {
        label: data.acfOptionsMainMenu.Menu.ctaButton?.label,
        link: data.acfOptionsMainMenu.Menu.ctaButton?.link?.mediaItemUrl,
        target: data.acfOptionsMainMenu.Menu.ctaButton?.target,
      },
      blocks: transformBlocks(data.nodeByUri?.blocks),
      pageTitle: data.nodeByUri?.title,
      seo: {
        title: data.nodeByUri?.seo?.title || data.nodeByUri?.title,
        metaDesc: data.nodeByUri?.seo?.metaDesc || "",
      },
      featuredImage: data.nodeByUri?.featuredImage?.node?.mediaItemUrl || "",
    },
  };
};

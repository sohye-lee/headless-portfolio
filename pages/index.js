import client from "client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "components/BlockRenderer";
import { transformBlocks } from "utils/transformBlocks";
import { mapMenuItems } from "utils/mapMenuItems";
import { MainMenu } from "components/MainMenu";

export default function Home(props) {
  console.log("props:", props);
  return (
    <div className="text-[18px] flex flex-col items-center w-full">
      <div className="px-4 max-w-[1440px] w-full ">
        <MainMenu items={props.mainMenuItems} />
        <div className="pt-16 w-full ">
          <BlockRenderer blocks={props.blocks} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          Menu {
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
  });
  return {
    props: {
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.Menu.menuItems),
      blocks: transformBlocks(data.nodeByUri.blocks),
    },
  };
};

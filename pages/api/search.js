import { gql } from "@apollo/client";
import client from "client";
const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPortfoliosQuery {
          portfolios {
            nodes {
              databaseId
              uri
              title
              portfolioFeatures {
                company
                description
                fieldGroupName
                link
                mainRole
                role
                stack
                type
              }
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    });

    return res.status(200).json({
      portfolios: data.portfolios.nodes,
    });
  } catch (error) {
    console.log("***ERROR:", error);
  }
};

export default handler;

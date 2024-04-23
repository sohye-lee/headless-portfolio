import { gql } from "@apollo/client";
import client from "client";
const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
        query AllPortfoliosQuery {
          portfolios(
            where: {
              offsetPagination: { size: 4, offset: ${
                ((filters.page || 1) - 1) * 4
              }}
              orderby: { field: DATE, order: DESC }
            }
          ) {
            pageInfo {
              offsetPagination {
                total
              }
            }
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
                tagline
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
      total: data.portfolios.pageInfo.offsetPagination.total,
    });
  } catch (error) {
    console.log("***ERROR:", error);
  }
};

export default handler;

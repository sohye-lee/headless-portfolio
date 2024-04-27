import { gql } from "@apollo/client";
import client from "client";
const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    let stacks = [];
    let roles = [];

    if (filters.stacks) stacks = filters.stacks.split(",");
    if (filters.roles) roles = filters.roles.split(",");

    let metaArray = [];
    if (stacks.length > 0)
      stacks.map((stack) => {
        metaArray.push(`{compare: LIKE, key: "stack", value: "${stack}"}`);
      });

    if (roles.length > 0)
      roles.map((role) =>
        metaArray.push(`{compare: LIKE, key: "main_role", value: "${role}"}`)
      );

    const { data } = await client.query({
      query: gql`
        query AllPortfoliosQuery {
          portfolios(
            where: {
              offsetPagination: { size: 4, offset: ${
                ((filters.page || 1) - 1) * 4
              }}
              orderby: { field: DATE, order: DESC }
              metaQuery: {
                metaArray:[${metaArray.join(", ")}],
                relation: OR
              }
        
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

import { gql } from "@apollo/client";
import client from "client";

export default function Page() {
  return <div>Page</div>;
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql``,
  });
};

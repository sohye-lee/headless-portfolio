import { env } from "env";

export const getAbsoluteUrls = (htmlString = "") => {
  return htmlString.split(env.NEXT_PUBLIC_WP_URL).join("");
};

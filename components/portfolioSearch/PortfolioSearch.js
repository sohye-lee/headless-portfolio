import { env } from "env";
import React, { useEffect, useState } from "react";
import { Results } from "./Results";

export default function PortfolioSearch() {
  const [portfolios, setPortfolios] = useState();

  useEffect(() => {
    const search = async () => {
      const response = await fetch("/api/search");
      const data = await response.json();
      console.log("SEARCH DATA: ", data);
      setPortfolios(data.portfolios);
    };
    search();
  }, []);
  return (
    <div className=" ">
      <input
        className="border-b border-b-black py-2 placeholder:text-gray-200 text-black outline-none"
        placeholder="search"
      />
      <div>
        <Results portfolios={portfolios} />
      </div>
    </div>
  );
}

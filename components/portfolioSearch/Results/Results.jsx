import { PortfolioItem } from "components/PortfolioItem";
import React from "react";

export default function Results({ portfolios }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 pt-8 gap-5 pb-20">
      {portfolios &&
        portfolios.map((p, i) => <PortfolioItem portfolio={p} key={i} />)}
    </div>
  );
}

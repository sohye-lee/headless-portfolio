import React, { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filter } from "./Filter";

export default function PortfolioSearch() {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState();
  const [totalItems, setTotalItems] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ page: parseInt(page || "1") }),
    });
    const data = await response.json();
    console.log("SEARCH DATA: ", data);
    setPortfolios(data.portfolios);
    setTotalItems(data.total);
  };

  const handlePageClick = (pageNo) => {
    router.push(`${router.query.slug.join("/")}?page=${pageNo}`, null);
    setCurrentPage(pageNo - 1);
    search();
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <div className=" ">
      <div>
        <Filter />
        <Results portfolios={portfolios} />
        <Pagination
          totalPages={Math.ceil(totalItems / itemsPerPage)}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />
      </div>
    </div>
  );
}

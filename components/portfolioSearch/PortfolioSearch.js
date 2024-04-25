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
    const { page, stacks, roles } = queryString.parse(window.location.search);
    const filters = {};
    filters.page = parseInt(page || 1);
    if (stacks) filters.stacks = stacks;
    if (roles) filters.roles = roles;
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(filters),
    })
      .then((res) => res.json())
      .then((data) => {
        setPortfolios(data.portfolios);
        setTotalItems(data.total);
      })
      .catch((err) => console.log("Filtering Error:", err));
  };

  const handlePageClick = async (pageNo) => {
    const { stacks: originalStacks, roles: originalRoles } = queryString.parse(
      window.location.search
    );
    let url = `${router.query.slug.join("/")}?page=${pageNo}`;
    if (originalStacks) url = url + `&stacks=${originalStacks}`;
    if (originalRoles) url = url + `&roles=${originalRoles}`;

    await router.push(url, null, {
      shallow: true,
    });
    setCurrentPage(pageNo - 1);
    search();
  };

  const handleSearch = async ({ stacks, roles }) => {
    await router.push(
      `${router.query.slug.join("/")}?page=1&stacks=${stacks}&roles=${roles}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    search();
  }, [router]);
  return (
    <div className=" ">
      <div>
        <Filter onSearch={handleSearch} />
        <Results portfolios={portfolios} />
        {Math.ceil(totalItems / itemsPerPage) > 1 && (
          <Pagination
            totalPages={Math.ceil(totalItems / itemsPerPage)}
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        )}
      </div>
    </div>
  );
}

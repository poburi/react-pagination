import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li onClick={() => paginate(number)} key={number} className="page-item">
          <a href="!#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

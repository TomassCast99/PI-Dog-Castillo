import React from "react";

export default function Paginated({ dogsPerPage, useDogs, paginated }) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(useDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
      <div className="paginated">
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => {
            return (
              <ul key={number}>
                <button
                  className="botonPaginado"
                  onClick={() => paginated(number)}
                >
                  {number}
                </button>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

import React from "react";

const Search = (props) => {
  console.info({ props });
  const { setSearch } = props;

  return (
    <div className="container center-element mb-m">
      <h2 className="title-post">Últimos Artículos</h2>
      <form role="search" className="search">
        <input
          aria-label="Buscar Artículos"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Artículos"
          className="px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white text-gray-900"
        />
        <svg
          height="35"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#654bc2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default Search;

import React from "react";
import Image from "next/image";
import { SearchIcon } from "../components/icon/search-icon";

const Search = (props) => {
  // console.info({ props });
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
        <figure>
          <SearchIcon />
        </figure>
      </form>
    </div>
  );
};

export default Search;

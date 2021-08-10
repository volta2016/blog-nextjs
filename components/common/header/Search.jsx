import React, { useState, useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";

const Search = (props) => {
	console.info({ props });
	const { setSearch } = props;

	return (
		<>
			<form role="search" className="search">
				<input
					aria-label="Search articles"
					type="text"
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search articles"
					className="px-4 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white text-gray-900"
				/>
				<svg
					height="35"
					width="22"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#561fbb"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</form>
		</>
	);
};

export default Search;

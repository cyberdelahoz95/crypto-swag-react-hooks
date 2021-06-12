import React from "react";

const SearchInput = ({searchInput, search, handleSearch}) => {
    return (
        <div className="mt-1 is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
        <input
            ref={searchInput}
            className="input is-info is-rounded search-input"
            type="text"
            value={search}
            onChange={handleSearch} />
    </div>
    )
};
export default SearchInput;
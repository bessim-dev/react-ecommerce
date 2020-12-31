import React from "react";
import { SearchContainer } from "./Search.style";

Search = () => {
  return (
    <SearchContainer>
      <input class="searchInput" type="text" name="" placeholder="Search" />
      <searchButtonContainer>
        <i class="material-icons">search</i>
      </searchButtonContainer>
    </SearchContainer>
  );
};
export default Search;

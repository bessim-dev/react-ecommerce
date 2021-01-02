import React from "react";
import { motion } from "framer-motion";
import {
  SearchContainer,
  SearchButtonContainer,
  SearchInputContainer,
  Icon,
} from "./Search.style";
const searchInputVariants = {
  initial: { width: "0", display: "none" },
  final: { width: "200px", display: "block" },
  transition: {},
};
const SearchContainerVariants = {
  initial: { width: "50px" },
  final: { width: "300px" },
};
const Search = () => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <SearchContainer
      variants={SearchContainerVariants}
      initial={clicked ? "final" : "initial"}
      animate={clicked ? "final" : "initial"}
    >
      <SearchInputContainer
        type="text"
        name=""
        placeHolder="Search"
        variants={searchInputVariants}
        initial={clicked ? "final" : "initial"}
        animate={clicked ? "final" : "initial"}
      />
      <SearchButtonContainer
        whileHover={{ scale: 0.8, rotate: 360 }}
        onClick={() => setClicked(!clicked)}
      >
        <Icon width="47" height="48" viewBox="0 0 47 48">
          <circle cx="29.5" cy="17.5" r="15" stroke="black" strokeWidth="5" />
          <line
            x1="19.7678"
            y1="27.7678"
            x2="1.76777"
            y2="45.7678"
            stroke="black"
            strokeWidth="5"
          />
        </Icon>
      </SearchButtonContainer>
    </SearchContainer>
  );
};
export default Search;

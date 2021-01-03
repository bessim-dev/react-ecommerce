import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SearchContainer,
  SearchButtonContainer,
  SearchInputContainer,
  Icon,
} from "./Search.style";
import OutsideClickEvent from "../OutsideClickEvent/OutsideClickEvent";
const searchInputVariants = {
  initial: { width: "0", display: "none" },
  final: { width: "200px", display: "block" },
  transition: {},
};
const SearchContainerVariants = {
  initial: { width: "50px" },
  final: { width: "300px" },
};
const SearchUI = () => {
  const [clicked, setClicked] = useState(false);
  const ref = useRef();
  OutsideClickEvent(ref, () => setClicked(false));
  return (
    <SearchContainer
      variants={SearchContainerVariants}
      initial={clicked ? "final" : "initial"}
      animate={clicked ? "final" : "initial"}
      ref={ref}
    >
      <SearchInputContainer
        type="text"
        name=""
        placeHolder="Search..."
        variants={searchInputVariants}
        initial={clicked ? "final" : "initial"}
        animate={clicked ? "final" : "initial"}
      />
      <SearchButtonContainer
        whileHover={{ scale: 0.8, rotate: 360 }}
        onClick={() => setClicked(!clicked)}
      >
        <Icon width="44" height="44" viewBox="0 0 44 44">
          <circle cx="26.5" cy="17.5" r="14" stroke="black" stroke-width="7" />
          <line
            x1="16.7218"
            y1="27.9312"
            x2="2.7218"
            y2="40.9312"
            stroke="black"
            stroke-width="8"
          />
        </Icon>
      </SearchButtonContainer>
    </SearchContainer>
  );
};
export default SearchUI;

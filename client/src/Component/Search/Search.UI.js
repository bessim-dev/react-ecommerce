import React, { useRef, useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../Redux/shop/shopSelector";

import {
  SearchContainer,
  SearchButtonContainer,
  SearchInputContainer,
  Icon,
  SearchDropdown,
  SearchDropdownRow,
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

const SearchUI = ({ SHOP_DATA }) => {
  const data = SHOP_DATA
    ? SHOP_DATA.map((array) => ({
        routeName: array.routeName,
        itemsName: array.items.map((el) => el.name),
      }))
    : [];
  console.log("shop", data);

  const [clicked, setClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const ref = useRef();
  OutsideClickEvent(ref, () => setClicked(false));
  console.log(suggestions);
  const search = (query, array) => {
    const finalList = [];
    let filteredList = [];
    if (query) {
      array.forEach(({ itemsName }) => {
        filteredList = itemsName.filter(
          (e) => e.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
        if (filteredList.length > 0) {
          finalList.push(filteredList);
        }
      });
      return finalList.flat();
    } else {
      return [];
    }
  };
  const hundleClickSugg = (sugg) => {
    const index = SHOP_DATA.forEach((el) => el.map((obj) => obj.find()));
  };
  const onTextChange = (e) => {
    const value = e.target.value;
    if (SHOP_DATA) {
      setSuggestions(search(value, data));
    }
  };
  const renderSuggestionsList = () => {
    if (suggestions.length > 0) {
      return (
        <AnimateSharedLayout>
          <AnimatePresence>
            {clicked && (
              <SearchDropdown
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {suggestions.map((suggestion) => (
                  <SearchDropdownRow key={suggestion}>
                    {suggestion}
                  </SearchDropdownRow>
                ))}
              </SearchDropdown>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      );
    }
    return null;
  };

  return (
    <>
      <SearchContainer
        variants={SearchContainerVariants}
        initial={clicked ? "final" : "initial"}
        animate={clicked ? "final" : "initial"}
        ref={ref}
      >
        <SearchInputContainer
          onChange={(e) => onTextChange(e)}
          placeholder="Search..."
          variants={searchInputVariants}
          initial={clicked ? "final" : "initial"}
          animate={clicked ? "final" : "initial"}
        />
        <SearchButtonContainer
          whileHover={{ scale: 0.8, rotate: 360 }}
          onClick={() => setClicked(!clicked)}
        >
          <Icon width="44" height="44" viewBox="0 0 44 44">
            <circle cx="26.5" cy="17.5" r="14" stroke="black" strokeWidth="7" />
            <line
              x1="16.7218"
              y1="27.9312"
              x2="2.7218"
              y2="40.9312"
              stroke="black"
              strokeWidth="8"
            />
          </Icon>
        </SearchButtonContainer>
      </SearchContainer>
      {renderSuggestionsList()}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  SHOP_DATA: selectCollectionForPreview,
});
export default connect(mapStateToProps)(SearchUI);

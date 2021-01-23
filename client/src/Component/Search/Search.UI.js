import React, { useRef, useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionForPreview,
  selectCollectionNamesForSearch,
} from "../Redux/shop/shopSelector";
import { fetchCollectionStart } from "../Redux/shop/shopActions";
import {
  SearchContainer,
  SearchButtonContainer,
  SearchInputContainer,
  SearchIcon,
  SearchDropdown,
  SearchDropdownRow,
} from "./Search.style";
import OutsideClickEvent from "../OutsideClickEvent/OutsideClickEvent";
import { useHistory } from "react-router-dom";
const searchInputVariants = {
  initial: { width: "0", display: "none" },
  final: { width: "200px", display: "block" },
  transition: {},
};
const findFirst = (query, array) => {
  let arr = [];
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].itemsName.length; i++) {
      if (array[j].itemsName[i] === query) {
        return { id: i, routeName: array[j].routeName };
      }
    }
  }
  return array.forEach(() => {});
};
const SearchUI = ({ fetchCollectionStart, data, SHOP_DATA }) => {
  let history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef();
  OutsideClickEvent(ref, () => setClicked(false));
  //fetchData
  if (clicked && !data.length) {
    fetchCollectionStart();
  }
  const search = (query, array) => {
    let finalList = [];
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
      return finalList.flat().slice(0, 10);
    } else {
      return [];
    }
  };

  const hundleClickSugg = (value) => {
    setInputValue(value);
    setSuggestions([]);
    const { id, routeName } = findFirst(value, data);
    history.push(`/shop/${routeName}`);
    setInputValue("");
  };
  const onTextChange = (e) => {
    const value = e.target.value;
    if (data.length > 0) {
      setSuggestions(search(value, data));
      setInputValue(value);
    } else {
      fetchCollectionStart();
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
                  <SearchDropdownRow
                    key={suggestion}
                    onClick={() => hundleClickSugg(suggestion)}
                  >
                    {suggestion}
                  </SearchDropdownRow>
                ))}
                <SearchDropdownRow onClick={() => history.push("/shop")}>
                  ...
                </SearchDropdownRow>
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
      <SearchContainer ref={ref}>
        <SearchInputContainer
          onChange={(e) => onTextChange(e)}
          placeholder="Search..."
          value={inputValue}
          variants={searchInputVariants}
          initial={clicked ? "final" : "initial"}
          animate={clicked ? "final" : "initial"}
        />
        <SearchButtonContainer onClick={() => setClicked(!clicked)}>
          <SearchIcon />
        </SearchButtonContainer>
        {renderSuggestionsList()}
      </SearchContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  SHOP_DATA: selectCollectionForPreview,
  data: selectCollectionNamesForSearch,
});
const dispatchStateToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(mapStateToProps, dispatchStateToProps)(SearchUI);

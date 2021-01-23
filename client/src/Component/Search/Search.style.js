import styled from "styled-components";
import { motion } from "framer-motion";
import { Search } from "@styled-icons/boxicons-regular";
export const SearchContainer = styled(motion.div)`
  display: flex;
  background-color: black;
  border-radius: 40px;
  cursor: pointer;
  will-change: width;
  box-shadow: 2px 1px 9px 0px rgba(0, 0, 0, 0.38);
  transition: all 0.5s;
  position: relative;
  &:hover {
    background-color: white;
  }
`;
export const SearchButtonContainer = styled(motion.button)`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.4s;
`;
export const SearchInputContainer = styled(motion.input)`
  border: none;
  padding: 0;
  background: none;
  outline: none;
  padding: 0;
  color: white;
  width: 0px;
  font-size: 1.6em;
  padding: 0 1em;
  will-change: width;
  ${SearchContainer}:hover & {
    color: black;
  }
`;
export const SearchIcon = styled(Search)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 25px;
  height: 25px;
  ${SearchContainer}:hover & {
    color: black;
  }
`;
export const SearchDropdown = styled(motion.ul)`
  position: absolute;
  z-index: 5;
  top: 40px;
  left: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 2px;
  border: 1px solid black;
`;
export const SearchDropdownRow = styled(motion.li)`
  background-color: rgba(214, 214, 214, 0.5);
  padding: 2px;
  margin-bottom: 4px;
  font-size: 20px;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  text-align: center;
  list-style: none;
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    filter: contrast(160%);
  }
`;

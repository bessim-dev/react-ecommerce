import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const SearchContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #626767;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  cursor: pointer;
  will-change: width;
`;
export const SearchButtonContainer = styled(motion.button)`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  height: 50px;
  width: 50px;
  cursor: pointer;
  text-align: center;
  will-change: scale;
  border-radius: 50%;
`;
export const SearchInputContainer = styled(motion.input)`
  border: none;
  margin-left: 1em;
  background: none;
  outline: none;
  padding: 0;
  color: white;
  font-size: 25px;
  ::placeholder {
    color: white;
  }
`;
export const Icon = styled(motion.svg)`
  flex: none;
  fill: none;
  width: 35px;
  height: 35px;
`;
export const SearchDropdown = styled(motion.ul)`
  position: absolute;
  z-index: 5;
  top: 65px;
  left: 240px;
  width: 200px;
  display: flex;
  flex-direction: column;
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
  list-style: none;
  &:last-child {
    margin-bottom: 0px;
  }
`;

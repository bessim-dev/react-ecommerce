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
`;
export const Icon = styled(motion.svg)`
  flex: none;
  fill: none;
  width: 35px;
  height: 35px;
`;

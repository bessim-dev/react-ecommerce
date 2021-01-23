import styled from "styled-components";
import { motion } from "framer-motion";
export const ProductContainer = styled(motion.div)`
  height: 450px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
export const Img = styled(motion.img)`
  border-radius: 5px;
  height: ${(p) => (p.center ? "100%" : "80%")};
  filter: ${(p) => (p.center ? "blur(0px)" : "blur(3px)")};
  margin: 0 -0.5rem;
  position: absolute;
  cursor: pointer;
`;
export const Control = styled.span`
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  position: absolute;
  top: 50%;
  margin-top: -35px;
  padding: 16px;
  border-radius: 50%;
  background-color: black;

  &:hover {
    filter: brightness(150%);
  }
`;
export const MainImg = styled(motion.div)`
  height: 100%;
  width: 350px;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const InfoOverlay = styled(motion.span)`
  width: 100%;
  height: 30%;
  background: white;
  z-index: 20;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ButtonOverlay = styled(motion.span)`
  width: 100%;
  height: 20%;
  background: white;
  z-index: 20;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.span`
  font-size: 18px;
  font-size: 36px;
  color: black;
  margin: 0;
  padding: 0.5em;
`;
export const Price = styled(Name)`
  font-size: 30px;
`;

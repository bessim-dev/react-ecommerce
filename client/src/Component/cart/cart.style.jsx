import styled from "styled-components";
import { ReactComponent as CartIcon } from "./cart-icon.svg";
export const CartIconContenantComponent = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconComponent = styled(CartIcon)`
  width: 40px;
  height: 40px;
`;
export const ItemCountComponent = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 7px;
`;

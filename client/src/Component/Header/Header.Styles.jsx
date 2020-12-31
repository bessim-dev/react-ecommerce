import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const optioncontainer = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LeftSide = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:space-between;

`
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.8rem;
  @media screen and (max-width : 800px){
    width:80%;
}
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
  @media screen and (max-width : 800px){
    width:50px;
    padding:10px;
}
`;
export const OptionLink = styled(Link)`
  ${optioncontainer}
`;
export const Optiondiv = styled.div`
  ${optioncontainer}
`;
export const UserOptionsDropdownContainer = styled.div`
width:170px;
position:absolute;
right:6.5rem;
top:90px;
  display: flex;
  flex-direction: column;
  padding: 0px 1px 1px 1px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`
export const UserOptions = styled.div`
    min-width: 145px;
    height: 50px;
    line-height: 50px;
    text-align:center;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
`

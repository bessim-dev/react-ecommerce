import React, { useState } from "react";
import {
  LogoContainer,
  OptionLink,
  OptionsContainer,
  Optiondiv,
  HeaderContainer,
  LeftSide,
  UserOptionsDropdownContainer,
  UserOptions,
  SearchBar,
} from "./Header.Styles";
import { ReactComponent as Logo } from "./crown.svg";
import { connect } from "react-redux";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
import { selectCurrentUser } from "../Redux/User/userSelector";
import { selectHidden } from "../Redux/cart/cartSelector";
import { slectUserDropDownHidden } from "../Redux/User/userSelector";
import { SignOutStart } from "../Redux/User/UserAction";

import { createStructuredSelector } from "reselect";

import UserIcon from "../userIcon/userIcon";
import Button from "../Button/Button";
import SearchUI from "../Search/Search.UI";
const Header = ({ currentUser, Hidden, signOutStart, userDropDownHidden }) => {
  return (
    <HeaderContainer>
      <LeftSide>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <SearchUI />
      </LeftSide>
      <OptionsContainer>
        {currentUser ? (
          <>
            <UserIcon signOutStart={signOutStart} />

            {userDropDownHidden ? null : (
              <UserOptionsDropdownContainer>
                <Button onClick={signOutStart}>SignOut</Button>
              </UserOptionsDropdownContainer>
            )}
          </>
        ) : (
          <OptionLink to="/Auth">Auth</OptionLink>
        )}
        <Cart />
      </OptionsContainer>
      {Hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  Hidden: selectHidden,
  userDropDownHidden: slectUserDropDownHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(SignOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

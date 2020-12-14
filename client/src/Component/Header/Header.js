import React from "react";
import {
  LogoContainer,
  OptionLink,
  OptionsContainer,
  Optiondiv,
  HeaderContainer,
} from "./Header.Styles";
import { ReactComponent as Logo } from "./crown.svg";
import { connect } from "react-redux";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
import { selectCurrentUser } from "../Redux/User/userSelector";
import { selectHidden } from "../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { SignOutStart } from "../Redux/User/UserAction";
const Header = ({ currentUser, Hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <Optiondiv onClick={signOutStart}>SignOut</Optiondiv>
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
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(SignOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

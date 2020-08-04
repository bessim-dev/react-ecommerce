import React from "react";
import {
  LogoContainer,
  OptionLink,
  OptionsContainer,
  Optiondiv,
  HeaderContainer,
} from "./Header.Styles";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../FireBase/FireBase";
import { connect } from "react-redux";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
import { selectCurrentUser } from "../Redux/User/userSelector";
import { selectHidden } from "../Redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser, Hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <Optiondiv onClick={() => auth.signOut()}>SignOut</Optiondiv>
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
export default connect(mapStateToProps)(Header);

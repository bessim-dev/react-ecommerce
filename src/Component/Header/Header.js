import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "./crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../FireBase/FireBase";
import { connect } from "react-redux";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
const Header = ({ currentUser,Hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link to="/Auth" className="option">
            Auth
          </Link>
        )}
        <Cart />
      </div>
      {Hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { Hidden } }) => ({
  currentUser,
  Hidden,
});
export default connect(mapStateToProps)(Header);

import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import CheckOut from "./Pages/checkOut/checkOut";

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Component/Header/Header";

import { connect } from "react-redux";
import { selectCurrentUser } from "./Component/Redux/User/userSelector";

import { createStructuredSelector } from "reselect";
import { CheckUserSession } from "./Component/Redux/User/UserAction";
import { GlobalStyle } from "./Global.styles";
const App = ({ CheckUserSession, currentUser }) => {
  useEffect(() => {
    CheckUserSession();
  }, [CheckUserSession]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
        <Route exact path="/checkOut" component={CheckOut} />
      </Switch>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  CheckUserSession: () => dispatch(CheckUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

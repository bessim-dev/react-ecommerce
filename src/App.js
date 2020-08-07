import React from "react";
import "./app.css";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Shop from "./Pages/Shop/Shop";
import CheckOut from "./Pages/checkOut/checkOut";

import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Component/Header/Header";

import { connect } from "react-redux";
import { setCurrentUser } from "./Component/Redux/User/UserAction";
import { selectCurrentUser } from "./Component/Redux/User/userSelector";

import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./Component/FireBase/FireBase";

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/auth"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Auth />
            }
          />
          <Route exact path="/checkOut" component={CheckOut} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import "./app.css";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Component/Header/Header";
import Auth from "./Pages/Auth/Auth";
import { auth, createUserProfileDocument } from "./Component/FireBase/FireBase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }else{
        this.setState({currentUser:user})
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;

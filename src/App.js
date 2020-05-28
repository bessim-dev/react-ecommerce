import React from 'react';
import "./app.css"
import Home from './Pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Header from './Component/Header/Header';
import Auth from './Pages/Auth/Auth';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/auth" component={Auth}/>
      </Switch>
    </div>
  );
}

export default App;

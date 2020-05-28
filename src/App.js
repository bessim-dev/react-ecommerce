import React from 'react';
import "./app.css"
import Home from './Pages/Home/Home';
import { Route } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/shop" component={Shop}/>
    </div>
  );
}

export default App;

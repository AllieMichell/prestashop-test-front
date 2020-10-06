import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// Components
import Home from './home/home';
import Orders from './orders/orders';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home exact path="/" />
        <Route path="/orders" component={Orders} />
      </div>
    </BrowserRouter>
  );
}

export default App;

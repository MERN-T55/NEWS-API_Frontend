import './App.css';
import React, {useEffect, useState} from 'react';


import React from 'react';
import './App.css'; // Import your CSS styles if needed
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from './News';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Apple">
            <News newsName="iphone" />
          </Route>
          <Route path="/Tesla">
            <News newsName="tesla" />
          </Route>
          <Route path="/Bitcoin">
            <News newsName="bitcoin" />
          </Route>
          <Route path="/Nasa">
            <News newsName="nasa" />
          </Route>
          <Route path="/upsc">
            <News newsName="upsc" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

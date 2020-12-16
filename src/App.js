import React, { useEffect, useState } from 'react'
import './App.css';
import Country from './components/Country';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CountryDetail from "./components/CountryDetail";
import InputSearch from './components/InputSearch';

function App() {

  console.log(countries)

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/countries/:country" >
            <CountryDetail  />
          </Route>
          <Route path="/">
            <InputSearch />
            <Country />
          </Route>
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;

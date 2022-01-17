import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import {Shop} from "./pages/shop/Shop"
import "./pages/homepage/homePage.scss";
import { Header } from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

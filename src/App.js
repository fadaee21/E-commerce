import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { Shop } from "./pages/shop/Shop";
import "./pages/homepage/homePage.scss";
import { Header } from "./components/header/Header";
import { Sign } from "./pages/sign/Sign";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useState } from "react";

function App() {
  
  const selectorData = useSelector(state=>state.user.value)

  const [user, setUser] = useState(selectorData);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [selectorData]);
  console.log(user);


  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Sign} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


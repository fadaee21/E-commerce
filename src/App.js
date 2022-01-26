import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import { Shop } from "./pages/shop/Shop";
import "./pages/homepage/homePage.scss";
import { Header } from "./components/header/Header";
import { Sign } from "./pages/sign/Sign";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [user, setUser] = useState({});

  if(user){console.log(user);}

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Sign} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

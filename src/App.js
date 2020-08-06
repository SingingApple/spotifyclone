import React, { useState, useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log("I have a token -->", token);
  }, []);
  return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
};

export default App;

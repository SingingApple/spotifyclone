import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";
import { useDataLayerValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("User: ", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      });
    }

    console.log("I have a token -->", user);
  }, []);
  return <div className="app">{token ? <Player></Player> : <Login />}</div>;
};

export default App;

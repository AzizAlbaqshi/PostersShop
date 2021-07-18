import "./App.css";

import PostersList from "./components/poster/PostersList";
import { GlobalStyle } from "./styles";
import { observer } from "mobx-react";
import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import StoreList from "./components/store/StoreList";
import posterStore from "./stores/posterStore";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import PostersDetail from "./components/poster/PostersDetail";
import StoreDetail from "./components/store/StoreDetail";

const theme = {
  light: {
    mainColor: "#8d99ae",
    backgroundColor: "#2b2d42",
    red: "red",
  },
  dark: {
    mainColor: "#2b2d42",
    backgroundColor: "#8d99ae",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        {/* {setView()} */}
        <Switch>
          <Route path="/posters/:posterSlug">
            <PostersDetail />
          </Route>
          <Route path="/posters">
            <PostersList posters={posterStore.posters} />
          </Route>
          <Route path="/stores/:storeSlug">
            <StoreDetail />
          </Route>
          <Route path="/stores">
            <StoreList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default observer(App);

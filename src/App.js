import "./App.css";
import posters from "./posters";
import PostersList from "./components/PostersList";
import { GlobalStyle } from "./styles";

import React from "react";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import PostersDetail from "./components/PostersDetail";

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

  const [_posters, setPosters] = useState(posters);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  // const setView = () => {
  //   return poster ? (
  //     <PostersDetail
  //       poster={poster}
  //       setPoster={setPoster}
  //       posterDelete={posterDelete}
  //     />
  //   ) : (
  //     <PostersList
  //       setPoster={setPoster}
  //       posters={_posters}
  //       posterDelete={posterDelete}
  //     />
  //   );
  // };

  const posterDelete = (posterId) => {
    const updatedPosters = _posters.filter((poster) => poster.id !== posterId);
    setPosters(updatedPosters);
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        {/* {setView()} */}
        <Switch>
          <Route path="/posters/:posterSlug">
            <PostersDetail posters={_posters} posterDelete={posterDelete} />
          </Route>
          <Route path="/posters">
            <PostersList posters={_posters} posterDelete={posterDelete} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

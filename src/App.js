import "./App.css";
import { GlobalStyle } from "./styles";
import { observer } from "mobx-react";
import React from "react";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Routes from "./components/Routes";
import storeStore from "./stores/storeStore";
import posterStore from "./stores/posterStore";

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
        {storeStore.loading || posterStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}

export default observer(App);

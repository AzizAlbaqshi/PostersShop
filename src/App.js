import "./App.css";
import PostersList from "./components/PostersList";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ListWrapper,
  ThemeButton,
} from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#8d99ae",
    backgroundColor: "#2b2d42",
  },
  dark: {
    mainColor: "#2b2d42",
    backgroundColor: "#8d99ae",
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
        <div>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "light"} mode
          </ThemeButton>
          <Title>Welcome to our Posters Shop</Title>
          <Description>Where Stolen ARTS and WALLS combaind !!</Description>
          <ShopImage
            alt="shop"
            src="https://helmsbakerydistrict.com/wp-content/uploads/2019/10/Bauhaus_Posters-1.jpg"
          />
        </div>

        <ListWrapper>
          <PostersList />
        </ListWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;

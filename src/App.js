import "./App.css";
import posters from "./posters";
import PostersList from "./components/PostersList";
import {
  GlobalStyle,
  Title,
  Description,
  ShopImage,
  ThemeButton,
} from "./styles";
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
  const [poster, setPoster] = useState(null);
  const [_posters, setPosters] = useState(posters);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const setView = () => {
    return poster ? (
      <PostersDetail
        poster={poster}
        setPoster={setPoster}
        posterDelete={posterDelete}
      />
    ) : (
      <PostersList
        setPoster={setPoster}
        posters={_posters}
        posterDelete={posterDelete}
      />
    );
  };

  const posterDelete = (posterId) => {
    const updatedPosters = _posters.filter((poster) => poster.id !== posterId);
    setPosters(updatedPosters);
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

        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;

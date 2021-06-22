import { Description, ShopImage, Title } from "../styles";
import React from "react";

const Home = () => {
  return (
    <div>
      <Title>Welcome to our Posters Shop</Title>
      <Description>Where Stolen ARTS and WALLS combaind !!</Description>
      <ShopImage
        alt="shop"
        src="https://helmsbakerydistrict.com/wp-content/uploads/2019/10/Bauhaus_Posters-1.jpg"
      />
    </div>
  );
};

export default Home;

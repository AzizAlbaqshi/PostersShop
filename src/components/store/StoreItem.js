import React from "react";
import { StoreItemImage, Text } from "../../styles";
import { Link } from "react-router-dom";

const StoreItem = ({ store }) => {
  return (
    <>
      <Link to={`/stores/${store.slug}`}>
        <StoreItemImage src={store.image} alt={store.name} />
      </Link>
      <Text>{store.name}</Text>
    </>
  );
};

export default StoreItem;

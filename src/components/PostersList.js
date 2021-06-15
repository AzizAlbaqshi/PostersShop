import { useState } from "react";
import posters from "../posters";
import { ListWrapper } from "../styles";
import PostersItem from "./PostersItem";
import SearchBar from "./SearchBar";

const PostersList = () => {
  const [query, setQuery] = useState("");
  const filterPosters = posters.filter((poster) => poster.name.includes(query));

  const postersList = filterPosters.map((poster) => (
    <PostersItem
      id={poster.id}
      name={poster.name}
      price={poster.price}
      image={poster.image}
    />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{postersList}</ListWrapper>;
    </div>
  );
};

export default PostersList;

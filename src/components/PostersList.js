import { useState } from "react";
import posters from "../posters";
import { ListWrapper } from "../styles";
import PostersItem from "./PostersItem";
import SearchBar from "./SearchBar";

const PostersList = (props) => {
  const [query, setQuery] = useState("");

  const postersList = props.posters
    .filter((poster) => poster.name.toLowerCase().includes(query.toLowerCase()))
    .map((poster) => (
      <PostersItem
        setPoster={props.setPoster}
        poster={poster}
        key={poster.id}
        posterDelete={props.posterDelete}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{postersList}</ListWrapper>
    </div>
  );
};

export default PostersList;

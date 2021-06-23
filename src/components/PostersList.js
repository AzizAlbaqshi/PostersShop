import { useState } from "react";

import { ListWrapper } from "../styles";
import PostersItem from "./PostersItem";
import SearchBar from "./SearchBar";
import posterStore from "../stores/posterStore";
import { observer } from "mobx-react";

const PostersList = () => {
  const [query, setQuery] = useState("");

  const postersList = posterStore.posters
    .filter((poster) => poster.name.toLowerCase().includes(query.toLowerCase()))
    .map((poster) => <PostersItem poster={poster} key={poster.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{postersList}</ListWrapper>
    </div>
  );
};

export default observer(PostersList);

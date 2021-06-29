import { useState } from "react";

import { ListWrapper, AiFillFireStyled } from "../styles";
import PostersItem from "./PostersItem";
import SearchBar from "./SearchBar";
import posterStore from "../stores/posterStore";
import { observer } from "mobx-react";

import PosterModal from "./modals/PosterModal";

const PostersList = () => {
  const [isOpen, setIsOpen] = useState("");
  const [query, setQuery] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const postersList = posterStore.posters
    .filter((poster) => poster.name.toLowerCase().includes(query.toLowerCase()))
    .map((poster) => <PostersItem poster={poster} key={poster.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <PosterModal isOpen={isOpen} closeModal={closeModal} />
      <AiFillFireStyled
        size="5em"
        class="button, button5"
        onClick={openModal}
      />
      <ListWrapper>{postersList}</ListWrapper>
    </div>
  );
};

export default observer(PostersList);

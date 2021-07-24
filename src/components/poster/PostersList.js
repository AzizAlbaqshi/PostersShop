import { useState } from "react";
import { ListWrapper, AiFillFireStyled } from "../../styles";
import PostersItem from "./PostersItem";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";
import PosterModal from "../modals/PosterModal";
import authStore from "../../stores/authStore";

const PostersList = ({ posters, store }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const postersList = posters
    .filter((poster) => poster.name.toLowerCase().includes(query.toLowerCase()))
    .map((poster) => <PostersItem poster={poster} key={poster.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <PosterModal isOpen={isOpen} closeModal={closeModal} store={store} />
      {authStore.user && (
        <AiFillFireStyled
          size="5em"
          class="button, button5"
          onClick={openModal}
        />
      )}
      <ListWrapper>{postersList}</ListWrapper>
    </div>
  );
};

export default observer(PostersList);

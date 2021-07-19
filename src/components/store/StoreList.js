import { useState } from "react";
import storeStore from "../../stores/storeStore";
import StoreItem from "./StoreItem";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";
import { AiFillFireStyled } from "../../styles";
import StoreModal from "../modals/StoreModal";

const StoreList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const stores = storeStore.stores
    .filter((store) => store.name.toLowerCase().includes(query.toLowerCase()))
    .map((store) => <StoreItem store={store} />);
  return (
    <div>
      <h1> Poster Stores</h1>
      <SearchBar setQuery={setQuery} />

      <AiFillFireStyled
        size="5em"
        class="button, button5"
        onClick={openModal}
      />
      <StoreModal isOpen={isOpen} closeModal={closeModal} />
      {stores}
    </div>
  );
};

export default observer(StoreList);

import { useState } from "react";
import storeStore from "../../stores/storeStore";
import StoreItem from "./StoreItem";
import SearchBar from "../SearchBar";
import { observer } from "mobx-react";

const StoreList = () => {
  const [query, setQuery] = useState("");
  const stores = storeStore.stores
    .filter((store) => store.name.toLowerCase().includes(query.toLowerCase()))
    .map((store) => <StoreItem store={store} />);
  return (
    <div>
      <h1> Poster Stores</h1>
      <SearchBar setQuery={setQuery} />
      {stores}
    </div>
  );
};

export default observer(StoreList);

import { makeAutoObservable } from "mobx";
import axios from "axios";

class StoreStore {
  stores = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchStores = async () => {
    try {
      const response = await axios.get("http://localhost:8000/stores");
      this.stores = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchStores:", error);
    }
  };

  storeCreate = async (newStore) => {
    try {
      const formData = new FormData();
      for (const key in newStore) formData.append(key, newStore[key]);

      const response = await axios.post(
        "http://localhost:8000/stores",
        formData
      );
      response.data.posters = [];
      this.stores.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const storeStore = new StoreStore();
storeStore.fetchStores();
export default storeStore;

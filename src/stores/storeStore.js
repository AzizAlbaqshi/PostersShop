import { makeAutoObservable } from "mobx";
import axios from "axios";

class StoreStore {
  stores = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchStores = async () => {
    try {
      const response = await axios.get("http://localhost:8000/stores");
      this.stores = response.data;
      console.log(this.stores);
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
      this.stores.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getPosterById = (posterId) => posterId.id === posterId;
}

const storeStore = new StoreStore();
storeStore.fetchStores();
export default storeStore;

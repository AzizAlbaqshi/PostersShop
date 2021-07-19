// import posters from "../posters";
import { makeAutoObservable } from "mobx";
import storeStore from "./storeStore";
import axios from "axios";

class PosterStore {
  // posters = posters;
  posters = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosters = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posters");
      this.posters = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchPosters:", error);
    }
  };

  posterDelete = async (posterId) => {
    try {
      storeStore.loading = true;
      await axios.delete(`http://localhost:8000/posters/${posterId}`);
      const updatedPosters = this.posters.filter(
        (poster) => poster.id !== posterId
      );
      this.posters = updatedPosters;
      storeStore.fetchStores();
    } catch (error) {
      console.error(error);
    }
  };

  posterCreate = async (newPoster, store) => {
    try {
      const formData = new FormData();
      for (const key in newPoster) formData.append(key, newPoster[key]);

      const response = await axios.post(
        `http://localhost:8000/stores/${store.id}/posters`,
        formData
      );
      this.posters.push(response.data);
      store.posters.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  posterUpdate = async (updatePoster) => {
    try {
      const formData = new FormData();
      for (const key in updatePoster) formData.append(key, updatePoster[key]);
      const rezponse = await axios.put(
        `http://localhost:8000/posters/${updatePoster.id}`,
        formData
      );
      const poster = this.posters.find(
        (poster) => poster.id === rezponse.data.id
      );
      for (const key in poster) poster[key] = rezponse.data[key];
    } catch (error) {
      console.error(error);
    }
  };
  getPosterById = (PosterId) =>
    this.posters.find((poster) => poster.id === PosterId);
}

const posterStore = new PosterStore();
posterStore.fetchPosters();
export default posterStore;

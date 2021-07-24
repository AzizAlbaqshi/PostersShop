// import posters from "../posters";
import { makeAutoObservable } from "mobx";
import storeStore from "./storeStore";
import instance from "./instance";

class PosterStore {
  // posters = posters;
  posters = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosters = async () => {
    try {
      const response = await instance.get("/posters");
      this.posters = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchPosters:", error);
    }
  };

  posterDelete = async (posterId) => {
    try {
      storeStore.loading = true;
      await instance.delete(`/posters/${posterId}`);
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

      const response = await instance.post(
        `/stores/${store.id}/posters`,
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
      const rezponse = await instance.put(
        `/posters/${updatePoster.id}`,
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

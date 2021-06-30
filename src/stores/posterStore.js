// import posters from "../posters";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class PosterStore {
  // posters = posters;
  posters = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosters = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posters");
      this.posters = response.data;
      console.log(this.posters);
    } catch (error) {
      console.error("fetchPosters:", error);
    }
  };

  posterDelete = async (posterId) => {
    try {
      await axios.delete(`http://localhost:8000/posters/${posterId}`);
      const updatedPosters = this.posters.filter(
        (poster) => poster.id !== posterId
      );
      this.posters = updatedPosters;
    } catch (error) {
      console.error(error);
    }
  };

  posterCreate = async (newPoster) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/posters",
        newPoster
      );
      this.posters.push(response.data);
    } catch (error) {
      console.error(error);
    }
    // newPoster.id = this.posters.length + 1;
    // newPoster.slug = slugify(newPoster.name);
    // this.posters.push(newPoster);
  };

  posterUpdate = (updatePoster) => {
    const poster = this.posters.find((poster) => poster.id === updatePoster.id);
    poster.name = updatePoster.name;
    poster.price = updatePoster.price;
    poster.description = updatePoster.description;
    poster.image = updatePoster.image;

    poster.slug = slugify(updatePoster.name);
  };
}

const posterStore = new PosterStore();
posterStore.fetchPosters();
export default posterStore;

import posters from "../posters";
import { makeAutoObservable } from "mobx";

class PosterStore {
  posters = posters;

  constructor() {
    makeAutoObservable(this);
  }

  posterDelete = (posterId) => {
    const updatedPosters = this.posters.filter(
      (poster) => poster.id !== posterId
    );
    this.posters = updatedPosters;
  };
}

const posterStore = new PosterStore();
export default posterStore;

import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";

class UserStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const userStore = new UserStore();
userStore.checkForToken();
export default userStore;

import PostersList from "../components/poster/PostersList";
import { Switch, Route } from "react-router";
import Home from "../components/Home";
import StoreList from "../components/store/StoreList";
import posterStore from "../stores/posterStore";
import PostersDetail from "../components/poster/PostersDetail";
import StoreDetail from "../components/store/StoreDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/posters/:posterSlug">
        <PostersDetail />
      </Route>
      <Route path="/posters">
        <PostersList posters={posterStore.posters} />
      </Route>
      <Route path="/stores/:storeSlug">
        <StoreDetail />
      </Route>
      <Route path="/stores">
        <StoreList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;

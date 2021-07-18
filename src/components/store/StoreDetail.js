import { useParams } from "react-router";
import storeStore from "../../stores/storeStore";
import { DetailWrapper } from "../../styles";
import PostersList from "../poster/PostersList";
import posterStore from "../../stores/posterStore";

const StoreDetail = () => {
  const { storeSlug } = useParams();
  const store = storeStore.stores.find((store) => store.slug === storeSlug);
  const posters = store.posters.map((poster) =>
    posterStore.getPosterById(poster.id)
  );
  return (
    <>
      <DetailWrapper>
        <h4>{store.name}</h4>
        <img src={store.image} alt={store.name} />
      </DetailWrapper>

      <PostersList posters={posters} />
    </>
  );
};

export default StoreDetail;

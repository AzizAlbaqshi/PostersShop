import { DetailWrapper } from "../../styles";
import DeleteButton from "../Buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import posterStore from "../../stores/posterStore";

const PostersDetail = () => {
  const posterSlug = useParams().posterSlug;
  const poster = posterStore.posters.find(
    (poster) => poster.slug === posterSlug
  );

  if (!poster) return <Redirect to="/posters" />;
  return (
    <DetailWrapper>
      <img src={poster.image} alt={poster.name} />
      <p>{poster.name}</p>
      <p>{poster.description}</p>
      <p>{poster.price} KD</p>

      <DeleteButton posterId={poster.id} />
      <button>Back</button>
    </DetailWrapper>
  );
};

export default observer(PostersDetail);

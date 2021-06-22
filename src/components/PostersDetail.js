import { DetailWrapper } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const PostersDetail = (props) => {
  const posterSlug = useParams().posterSlug;
  const poster = props.posters.find((poster) => poster.Slug === posterSlug);

  if (!poster) return <Redirect to="/posters" />;
  return (
    <DetailWrapper>
      <img src={poster.image} alt={poster.name} />
      <p>{poster.name}</p>
      <p>{poster.description}</p>
      <p>{poster.price} KD</p>

      <DeleteButton posterDelete={props.posterDelete} posterId={poster.id} />
      <button onClick={() => props.setPoster(null)}>Back</button>
    </DetailWrapper>
  );
};

export default PostersDetail;

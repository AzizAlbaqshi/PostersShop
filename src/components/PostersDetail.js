import { DetailWrapper } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const PostersDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.poster.image} alt={props.poster.name} />
      <p>{props.poster.name}</p>
      <p>{props.poster.description}</p>
      <p>{props.poster.price} KD</p>

      <DeleteButton
        posterDelete={props.posterDelete}
        posterId={props.poster.id}
        setPoster={props.setPoster}
      />
      <button onClick={() => props.setPoster(null)}>Back</button>
    </DetailWrapper>
  );
};

export default PostersDetail;

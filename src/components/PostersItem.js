import { PostersWrapper, PosterImage, Text } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";

const PostersItem = (props) => {
  return (
    <PostersWrapper>
      <Link to={`/posters/${props.poster.slug}`}>
        <PosterImage
          src={props.poster.image}
          onClick={() => props.setPoster(props.poster)}
        />
      </Link>
      <Text>{props.poster.name}</Text>
      <Text>{props.poster.price} KD</Text>
      <DeleteButton
        posterDelete={props.posterDelete}
        posterId={props.poster.id}
        setPoster={props.setPoster}
      />
    </PostersWrapper>
  );
};

export default PostersItem;

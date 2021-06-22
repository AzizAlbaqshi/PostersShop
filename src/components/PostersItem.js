import { PostersWrapper, PosterImage, Text } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { link } from "react-router-dom";

const PostersItem = (props) => {
  return (
    <PostersWrapper>
      <link to={`/posters/${props.poster.slug}`}>
        <PosterImage
          src={props.poster.image}
          onClick={() => props.setPoster(props.poster)}
        />
      </link>
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

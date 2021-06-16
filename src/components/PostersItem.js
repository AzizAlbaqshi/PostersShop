import { PostersWrapper, PosterImage, Text } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
const PostersItem = (props) => {
  return (
    <PostersWrapper key={props.poster.id}>
      <PosterImage
        src={props.poster.image}
        onClick={() => props.setPoster(props.poster)}
      />

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

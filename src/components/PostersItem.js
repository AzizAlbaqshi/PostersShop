import { PostersWrapper, PosterImage, Text } from "../styles";
const PostersItem = (props) => {
  return (
    <PostersWrapper key={props.id}>
      <PosterImage src={props.image} />
      <Text>{props.name}</Text>
      <Text>{props.price} KD</Text>
    </PostersWrapper>
  );
};

export default PostersItem;

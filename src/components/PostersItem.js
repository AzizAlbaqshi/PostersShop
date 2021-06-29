import { PostersWrapper, PosterImage, Text } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const PostersItem = (props) => {
  return (
    <PostersWrapper>
      <Link to={`/posters/${props.poster.slug}`}>
        <PosterImage src={props.poster.image} />
      </Link>
      <Text>{props.poster.name}</Text>
      <Text>{props.poster.price} KD</Text>
      <UpdateButton poster={props.poster} />
      <DeleteButton posterId={props.poster.id} />
    </PostersWrapper>
  );
};

export default observer(PostersItem);

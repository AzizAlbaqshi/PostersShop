import { DeleteB } from "../../styles";
import posterStore from "../../stores/posterStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    posterStore.posterDelete(props.posterId);
  };
  return <DeleteB onClick={handleDelete}>Delete</DeleteB>;
};
export default DeleteButton;

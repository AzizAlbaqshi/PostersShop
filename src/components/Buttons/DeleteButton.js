import { DeleteB } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.posterDelete(props.posterId);
    props.setPoster(null);
  };
  return <DeleteB onClick={handleDelete}>Delete</DeleteB>;
};
export default DeleteButton;

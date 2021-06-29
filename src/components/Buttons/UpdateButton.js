import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import PosterModal from "../modals/PosterModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <PosterModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldPoster={props.poster}
      />
    </div>
  );
};

export default UpdateButton;

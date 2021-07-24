import { useState } from "react";
import { AuthButtonStyled } from "../../styles";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Signin</AuthButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;

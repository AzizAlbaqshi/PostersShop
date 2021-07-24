import React from "react";
import { useState } from "react";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Signup</button>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;

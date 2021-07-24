import Modal from "react-modal";

//state
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";
import authStore from "../../stores/authStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SigninModal = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Signin Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="username"
            />

            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <CreateButtonStyled>Signin</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SigninModal;

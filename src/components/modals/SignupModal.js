import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import authStore from "../../stores/authStore";

const SignupModal = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Signup Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="username"
                value={user.username}
              />
            </div>
            <div className="col-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>

          <CreateButtonStyled>Signup</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SignupModal;

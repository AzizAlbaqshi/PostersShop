import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import storeStore from "../../stores/storeStore";

const StoreModal = (props) => {
  const [store, setStore] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setStore({ ...store, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setStore({ ...store, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    storeStore.storeCreate(store);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="store Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={store.name}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="image"
            />
          </div>

          <CreateButtonStyled>Add</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default StoreModal;

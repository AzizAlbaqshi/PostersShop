import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import posterStore from "../../stores/posterStore";

const PosterModal = (props) => {
  const [poster, setPoster] = useState(
    props.oldPoster
      ? props.oldPoster
      : {
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setPoster({ ...poster, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setPoster({ ...poster, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.oldPoster) posterStore.posterUpdate(poster);
    else posterStore.posterCreate(poster, props.store);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Postar Modal"
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
                value={poster.name}
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
                value={poster.price}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="description"
              value={poster.description}
            />
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
          <CreateButtonStyled>
            {props.oldPoster ? "Update" : "Add"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default PosterModal;

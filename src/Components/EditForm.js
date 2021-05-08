import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";

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

Modal.setAppElement("#root");
const EditForm = ({ oldTask }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [old, setOld] = useState(oldTask.description);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => setOld(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = { ...oldTask, description: old };
    dispatch(editTask(editedTask));
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <input
            className="st"
            type="text"
            value={old}
            onChange={handleChange}
          />
          <button>Confirm</button>
          <button id="del" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditForm;

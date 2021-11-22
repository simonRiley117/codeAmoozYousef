import React from "react";
import Modal from "../../Register/Modal";
import Detaile from "./Detaile";

function Courseintro({ onCancel, visible, ...rest }) {
  return (
    <Modal visible={visible} {...rest}>
      <i
        className="fas fa-times cursor-pointer Detaile__exit"
        onClick={onCancel}
      ></i>
      <Detaile />
    </Modal>
  );
}

export default Courseintro;

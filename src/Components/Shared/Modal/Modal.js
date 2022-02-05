import React from "react";
import { Modal as ModalBase } from "antd";

const Modal = ({ children, ...rest }) => {
  return (
    <ModalBase
      className="modal"
      footer={null}
      centered
      destroyOnClose
      maskClosable={false}
      {...rest}
    >
      {children}
    </ModalBase>
  );
};
export default Modal;

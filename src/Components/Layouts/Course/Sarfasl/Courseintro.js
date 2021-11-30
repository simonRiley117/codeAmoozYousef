import React from "react";
import Modal from "../../Register/Modal";
import Detail from "./Detail";

function Courseintro({contentUuid, onCancel, visible, ...rest}) {
    return (
        <Modal visible={visible} {...rest}>
            <i
                className="fas fa-times cursor-pointer Detaile__exit"
                onClick={onCancel}
            />
            <Detail contentUuid={contentUuid}/>
        </Modal>
    );
}

export default Courseintro;

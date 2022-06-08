import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

import './SuccessfulPaymentModal.scss';

function SuccessfulPaymentModal({ showModal, toggleShowModal }) {
  return (
    <Modal
      className="successful-payment-modal"
      isOpen={showModal}
      toggle={toggleShowModal}
      centered
    >
      <ModalHeader tag="div">
        <i className="icon fa-solid fa-circle-check" />
        <h5>
          ¡Pago exitoso!
        </h5>
      </ModalHeader>
      <ModalBody>
        <p className="mb-0">
          Su pago fue procesado exitosamente, en breve estará recibiendo un correo electrónico
          con todos los detalles de la compra.
        </p>
      </ModalBody>
      <ModalFooter>
        <button
          className="button"
          onClick={toggleShowModal}
          type="button"
        >
          Ver detalles
        </button>
        <button
          className="button accept-button"
          onClick={toggleShowModal}
          type="button"
        >
          Continuar
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default SuccessfulPaymentModal;

SuccessfulPaymentModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleShowModal: PropTypes.func.isRequired,
};

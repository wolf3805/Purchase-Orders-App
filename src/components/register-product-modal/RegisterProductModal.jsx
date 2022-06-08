import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

import Input from '../input/Input';
import './RegisterProductModal.scss';

function RegisterProductModal({
  showModal,
  toggleShowModal,
  addProduct = null,
}) {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    sku: yup.string()
      .default(null)
      .required('Este campo es requerido')
      .nullable(),
    name: yup.string()
      .default(null)
      .required('Este campo es requerido')
      .nullable(),
    quantity: yup.number()
      .default(null)
      .required('Este campo es requerido')
      .nullable(),
    price: yup.number()
      .default(null)
      .required('Este campo es requerido')
      .nullable(),
  });

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: schema.cast(),
    resolver: yupResolver(schema),
  });

  const inputs = {
    sku: register('sku'),
    name: register('name'),
    quantity: register('quantity'),
    price: register('price'),
  };

  const closeModal = () => {
    reset();
    toggleShowModal();
  };

  const submit = (formData) => {
    setLoading(true);

    const formattedData = { ...formData };

    setTimeout(() => {
      addProduct(formattedData);
      setLoading(false);
      closeModal();
    }, 300);
  };

  return (
    <Modal
      className="register-product-modal"
      isOpen={showModal}
      toggle={toggleShowModal}
      centered
    >
      <ModalHeader tag="div">
        <h5>
          Agregar producto
        </h5>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <Input
              id="sku"
              label="SKU"
              placeholder="Ingrese el sku del producto"
              type="text"
              error={errors.sku}
              ref={inputs.sku.ref}
              name={inputs.sku.name}
              onChange={inputs.sku.onChange}
              onBlur={inputs.sku.onBlur}
            />
          </div>
          <div className="mb-3">
            <Input
              id="name"
              label="Nombre"
              placeholder="Ingrese el nombre del producto"
              type="text"
              error={errors.name}
              ref={inputs.name.ref}
              name={inputs.name.name}
              onChange={inputs.name.onChange}
              onBlur={inputs.name.onBlur}
            />
          </div>
          <div className="mb-3">
            <Input
              id="quantity"
              label="Cantidad"
              placeholder="Ingrese la cantidad de producto"
              type="number"
              error={errors.quantity}
              ref={inputs.quantity.ref}
              name={inputs.quantity.name}
              onChange={inputs.quantity.onChange}
              onBlur={inputs.quantity.onBlur}
            />
          </div>
          <div className="mb-3">
            <Input
              id="price"
              label="Precio"
              placeholder="Ingrese el precio del producto"
              type="number"
              error={errors.price}
              ref={inputs.price.ref}
              name={inputs.price.name}
              onChange={inputs.price.onChange}
              onBlur={inputs.price.onBlur}
              step="any"
            />
          </div>
          <Button
            type="button"
            color="secondary"
            onClick={closeModal}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={loading}
          >
            {loading && <i className="fas fa-spinner fa-spin" />}
            Agregar
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default RegisterProductModal;

RegisterProductModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleShowModal: PropTypes.func.isRequired,
  addProduct: PropTypes.func,
};

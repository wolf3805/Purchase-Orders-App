import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardBody,
  Table,
  Button,
  CardHeader,
} from 'reactstrap';

import CardLoader from '../../components/card-loader/CardLoader';
import RegisterProductModal from '../../components/register-product-modal/RegisterProductModal';
import SuccessfulPaymentModal from '../../components/successful-payment-modal/SuccessfulPaymentModal';
import './ShowPurchaseOrder.scss';

function ShowPurchaseOrder() {
  const { state: { order } } = useLocation();

  const [orderState, setOrderState] = useState(order);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  const toggleShowPaymentModal = () => setShowPaymentModal(!showPaymentModal);

  const openProductModal = () => setShowModal(true);

  const openPaymentModal = () => setShowPaymentModal(true);

  const addProduct = (formData) => {
    const formattedData = { ...formData };
    formattedData.id = Math.random().toString().slice(2, 11);

    const orderData = { ...orderState };
    orderData.items = [...orderData.items, formattedData];

    setOrderState(orderData);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="show-purchase-order">
      <div className="container px-0">
        <h1 className="title">
          Detalles de orden
        </h1>
        <div className="row">
          <div className="col-md-9">
            <Card>
              {loading && <CardLoader />}
              {!loading && (
                <>
                  <CardHeader>
                    <h6>
                      Orden de compra
                      <b>
                        &nbsp;
                        #
                        {orderState.number}
                      </b>
                    </h6>
                    <Button color="primary" onClick={openProductModal}>
                      <i className="fa-solid fa-circle-plus" />
                      Agregar producto
                    </Button>
                  </CardHeader>
                  <CardBody>
                    <Table borderless>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>SKU</th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderState.items.length > 0 && orderState.items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <a href="/">
                                {item.id}
                              </a>
                            </td>
                            <td>
                              {item.sku}
                            </td>
                            <td>
                              {item.name}
                            </td>
                            <td>
                              {item.quantity}
                            </td>
                            <td>
                              {item.price}
                            </td>
                            <td>
                              <button type="button" className="delete-button">
                                <i className="fa-solid fa-trash-can" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </CardBody>
                </>
              )}
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              {loading && <CardLoader />}
              {!loading && (
                <CardBody>
                  <div className="prices">
                    <ul className="prices-list">
                      <li className="prices-item">
                        <h6>
                          Subtotal
                        </h6>
                        <p>
                          $
                          {+orderState.totals.subtotal + +orderState.totals.discount}
                        </p>
                      </li>
                      <li className="prices-item">
                        <h6>
                          Impuestos
                        </h6>
                        <p>
                          $
                          {orderState.totals.tax}
                        </p>
                      </li>
                      <li className="prices-item">
                        <h6>
                          Descuento
                        </h6>
                        <p>
                          $
                          {orderState.totals.discount}
                        </p>
                      </li>
                      <li className="prices-item total">
                        <h6>
                          Total
                        </h6>
                        <p>
                          $
                          {orderState.totals.total}
                        </p>
                      </li>
                    </ul>
                    <Button
                      className="payment-button"
                      onClick={openPaymentModal}
                    >
                      Pagar
                    </Button>
                  </div>
                </CardBody>

              )}
            </Card>
          </div>
        </div>
      </div>
      <RegisterProductModal
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        addProduct={addProduct}
      />
      <SuccessfulPaymentModal
        showModal={showPaymentModal}
        toggleShowModal={toggleShowPaymentModal}
      />
    </div>
  );
}

export default ShowPurchaseOrder;

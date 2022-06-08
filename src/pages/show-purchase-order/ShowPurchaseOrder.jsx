import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card,
  CardBody,
  Table,
  Button,
} from 'reactstrap';

import CardLoader from '../../components/card-loader/CardLoader';
import './ShowPurchaseOrder.scss';

function ShowPurchaseOrder() {
  const { state } = useLocation();

  const { order } = state;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="show-purchase-orders">
      <h1>
        Orden de compra No.
        <span>
          {order.number}
        </span>
      </h1>
      <div className="container px-0">
        <div className="row">
          <div className="col-md-9">
            <Card>
              <CardBody>
                {loading && <CardLoader />}
                {!loading && (
                  <>
                    <label htmlFor="search">
                      <i className="fa-solid fa-magnifying-glass" />
                      <input id="search" type="text" placeholder="Buscar por Id de producto" />
                    </label>
                    <Table borderless>
                      <thead>
                        <tr>
                          <th>
                            Id
                          </th>
                          <th>
                            SKU
                          </th>
                          <th>
                            Producto
                          </th>
                          <th>
                            Cantidad
                          </th>
                          <th>
                            Precio
                          </th>
                          <th>
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.length > 0 && order.items.map((item) => (
                          <tr key={item.id}>
                            <th scope="row">
                              <a href="/">
                                {item.id}
                              </a>
                            </th>
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
                              <button type="button">
                                <i className="fa-solid fa-trash-can" />
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                )}
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <CardBody>
                <div className="prices">
                  <div className="prices-list">
                    <div className="prices-item">
                      <h6>
                        Subtotal
                      </h6>
                      <p>
                        {+order.totals.subtotal + +order.totals.discount}
                      </p>
                    </div>
                    <div className="prices-item">
                      <h6>
                        Impuestos
                      </h6>
                      <p>
                        {order.totals.tax}
                      </p>
                    </div>
                    <div className="prices-item">
                      <h6>
                        Descuento
                      </h6>
                      <p>
                        {order.totals.discount}
                      </p>
                    </div>
                  </div>
                  <div className="prices-total">
                    <h6>
                      Total
                    </h6>
                    <p>
                      {order.totals.total}
                    </p>
                  </div>
                  <Button color="primary">
                    Pagar
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPurchaseOrder;

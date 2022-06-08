import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Table,
} from 'reactstrap';

import CardLoader from '../../components/card-loader/CardLoader';
import { getAll } from '../../api/orders';
import './ListPurchaseOrders.scss';

function ListPurchaseOrders() {
  const [loading, setLoading] = useState(true);

  const [orderList, setOrderList] = useState([]);

  const getOrders = async () => {
    setLoading(true);

    const response = await getAll();

    const { success, orders } = response;

    if (success) {
      setOrderList(orders);
    }

    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="list-purchase-orders">
      <h1 className="title">Ordenes de compra</h1>
      <Card>
        <CardBody>
          <div className="search-input">
            <label htmlFor="search">
              <i className="fa-solid fa-magnifying-glass" />
              <input id="search" type="text" placeholder="Buscar por Id de orden" />
            </label>
          </div>
          {loading && <CardLoader />}
          {!loading && (
            <Table borderless>
              <thead>
                <tr>
                  <th>
                    Id
                  </th>
                  <th>
                    Numero de orden
                  </th>
                  <th>
                    Estatus
                  </th>
                  <th>
                    Total
                  </th>
                  <th>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderList.length > 0 && orderList.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <NavLink to={`/ordenes-de-compra/${order.id}`} state={{ order }}>
                        {order.id}
                      </NavLink>
                    </td>
                    <td>
                      #
                      {order.number}
                    </td>
                    <td>
                      <span className="badge success">
                        {order.status.financial}
                      </span>
                    </td>
                    <td>
                      $
                      {order.totals.total}
                    </td>
                    <td>
                      <div className="dropdown">
                        <Button
                          className="dropdown-main-button"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </Button>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              className="dropdown-item"
                              to={`/ordenes-de-compra/${order.id}`}
                              state={{ order }}
                            >
                              Ver detalles
                            </NavLink>
                          </li>
                          <li>
                            <Button className="dropdown-item">
                              Eliminar
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default ListPurchaseOrders;

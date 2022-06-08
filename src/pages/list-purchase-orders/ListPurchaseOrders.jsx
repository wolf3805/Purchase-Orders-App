import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  Table,
} from 'reactstrap';
import { getAll } from '../../api/orders';

import './ListPurchaseOrders.scss';

function ListPurchaseOrders() {
  const [orderList, setOrderList] = useState([]);

  const getOrders = async () => {
    const response = await getAll();

    const { success, orders } = response;

    if (success) {
      setOrderList(orders);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="list-purchase-orders">
      <h1>Ordenes de compra</h1>
      <Card>
        <CardBody>
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass" />
            <input id="search" type="text" placeholder="Buscar por Id de orden" />
          </label>
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
              </tr>
            </thead>
            <tbody>
              {orderList.length > 0 && orderList.map((order) => (
                <tr key={order.id}>
                  <th scope="row">
                    <NavLink to={`/ordenes-de-compra/${order.id}`} state={{ order }}>
                      {order.id}
                    </NavLink>
                  </th>
                  <td>
                    {order.number}
                  </td>
                  <td>
                    {order.status.financial}
                  </td>
                  <td>
                    {order.totals.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default ListPurchaseOrders;

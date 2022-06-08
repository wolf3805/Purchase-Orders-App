import DashboardLayout from '../layouts/dashboard-layout/DashboardLayout';
import ListPurchaseOrders from '../pages/list-purchase-orders/ListPurchaseOrders';
import ShowPurchaseOrder from '../pages/show-purchase-order/ShowPurchaseOrder';

const routes = [
  {
    path: '/*',
    element: DashboardLayout,
    routes: [
      {
        id: 'home',
        path: '/',
        element: ListPurchaseOrders,
      },
      {
        id: 'list-purchase-orders',
        path: '/ordenes-de-compra',
        element: ListPurchaseOrders,
      },
      {
        id: 'show-purchase-orders',
        path: '/ordenes-de-compra/:orderId',
        element: ShowPurchaseOrder,
      },
    ],
  },
];

export default routes;

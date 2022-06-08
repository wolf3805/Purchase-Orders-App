import axios from 'axios';

import { VERSION } from '../consts/api';
import apiResolve from '../utils/apiResolve';

const create = async (data) => (
  apiResolve(axios.post(`/api/${VERSION}/orders`, data)
    .then((response) => response.data))
);

const get = async (id) => (
  apiResolve(axios.get(`/api/${VERSION}/orders/${id}`)
    .then((response) => response.data))
);

const getAll = async (params = null) => (
  apiResolve(axios.get(`/api/${VERSION}/orders`, { params })
    .then((response) => response.data))
);

const remove = async (id) => (
  apiResolve(axios.post(`/api/${VERSION}/orders/${id}`, { _method: 'DELETE' })
    .then((response) => response.data))
);

const update = async (id, data) => (
  apiResolve(axios.put(`/api/${VERSION}/orders/${id}`, { ...data, _method: 'PUT' })
    .then((response) => response.data))
);

export {
  create,
  get,
  getAll,
  remove,
  update,
};

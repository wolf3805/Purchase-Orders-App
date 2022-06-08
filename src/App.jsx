import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap';

import routes from './routes/routes';
import './config/axios';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element routes={route.routes} />}
            />
          ))}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

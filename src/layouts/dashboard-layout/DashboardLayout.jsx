import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, useNavigate } from 'react-router-dom';

import PageLoader from '../../components/page-loader/PageLoader';
import Header from './components/header/Header';
import LeftSidebar from './components/left-sidebar/LeftSidebar';
import './DashboardLayout.scss';

function Dashboard({ routes }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading, navigate]);

  if (loading) {
    return <PageLoader />;
  }

  return (loading
    ? <PageLoader />
    : (
      <div className="dashboard-layout">
        <Header />
        <LeftSidebar />
        <div className="content">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={(
                  <route.element path={route.path} />
                )}
              />
            ))}
          </Routes>
        </div>
      </div>
    )
  );
}

export default Dashboard;

Dashboard.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    element: PropTypes.elementType.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      element: PropTypes.elementType.isRequired,
    })),
  })),
};

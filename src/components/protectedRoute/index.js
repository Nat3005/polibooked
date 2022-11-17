import React from 'react';
import { PropTypes } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { ReactSpinner } from 'react-spinning-wheel';
import { UserAuth } from '../../context/UserContext';
import 'react-spinning-wheel/dist/style.css';

function ProtectedRoute({ children }) {
  const { user, loading } = UserAuth();

  if (loading) return <ReactSpinner />;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};

ProtectedRoute.defaultProps = {
  children: {},
};

export default ProtectedRoute;

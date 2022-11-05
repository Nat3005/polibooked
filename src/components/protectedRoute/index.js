import React from 'react';
import { PropTypes } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/UserContext';

function ProtectedRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
};

ProtectedRoute.defaultProps = {
  children: {},
};

export default ProtectedRoute;

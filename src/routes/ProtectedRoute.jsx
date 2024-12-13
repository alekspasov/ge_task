import { getUser } from '../utils/auth';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = getUser();
  const location = useLocation();
  if(!isAuthenticated){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node
};

export default ProtectedRoute;
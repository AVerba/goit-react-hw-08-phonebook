import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../redux/auth/authSelectors';

export const PublicRoute = ({ component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : component;
};
export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

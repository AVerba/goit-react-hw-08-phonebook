import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

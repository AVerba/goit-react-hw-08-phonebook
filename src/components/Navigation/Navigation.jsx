import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/todos"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Notes of Task
      </NavLink>
    </div>
  );
};

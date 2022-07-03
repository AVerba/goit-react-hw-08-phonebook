import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from 'react-bootstrap/Button';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <img alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome back, {name}</span>
      <Button
        variant="outline-primary"
        className={styles.logOut}
        onClick={() => dispatch(authOperations.logOut())}
      >
        logout
      </Button>
    </div>
  );
};

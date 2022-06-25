import * as React from 'react';

import Button from 'react-bootstrap/Button';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div style={styles.container}>
      <img alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, User</span>
      <Button variant="outline-primary" className={styles.logOut}>
        logout
      </Button>
    </div>
  );
};

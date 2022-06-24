import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AuthNav.module.css';
import RegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  const [active, setActive] = useState('register');
  const handleSelect = eventKey => setActive(eventKey);
  return (
    <Nav variant="pills" activeKey={active} onSelect={handleSelect}>
      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey="register"
          to="/register"
        >
          <RegIcon className={styles.icon} />
          Register
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey="login"
          to="/login"
        >
          <LoginIcon className={styles.icon} />
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

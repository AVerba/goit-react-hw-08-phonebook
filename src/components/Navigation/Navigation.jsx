import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [active, setActive] = useState('Home');
  const handleSelect = eventKey => setActive(eventKey);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav variant="pills" activeKey={active} onSelect={handleSelect}>
      {!isLoggedIn ? (
        <Nav.Item className={styles.item}>
          <Nav.Link as={NavLink} className={styles.link} eventKey="Home" to="/">
            Home
          </Nav.Link>
        </Nav.Item>
      ) : (
        <>
          <Nav.Item className={styles.item}>
            <Nav.Link
              as={NavLink}
              className={styles.link}
              eventKey="contacts"
              to="/contacts"
            >
              <ContactPageIcon className={styles.icon} />
              Contacts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.item}>
            <Nav.Link
              as={NavLink}
              className={styles.link}
              eventKey="todos"
              to="/todos"
            >
              <TextSnippetIcon className={styles.icon} />
              Notes
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

import styles from './HomeView.module.css';

import { Container } from '@mui/material';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.banner}>
      <Container>
        <h3 className={styles.title}>Welcome to your personal organizer</h3>
        <ul className={styles.contentList}>
          <li className={styles.contentItem}>
            <p className={styles.phoneSubtitle}>
              STORE AND MANAGE ALL YOUR CONTACTS!
            </p>
            <p className={styles.phoneSubscribe}>
              Create your phonebook at once and keep, update them forever on
              this site.
            </p>

            <Nav.Link
              as={NavLink}
              className={styles.link}
              eventKey="contacts"
              to="/contacts"
            >
              Try Now
              <DoubleArrowIcon className={styles.arrowIcon} />
            </Nav.Link>
          </li>
          <li className={styles.contentItem}>
            <p className={styles.phoneSubtitle}>
              STORE AND MANAGE ALL YOUR NOTES!
            </p>
            <p className={styles.phoneSubscribe}>
              Create your note list and save all the important things. You can
              be sure that all your plans will be saved and will always be at
              hand
            </p>

            <Nav.Link
              as={NavLink}
              className={styles.link}
              eventKey="contacts"
              to="/todos"
            >
              Try Now
              <DoubleArrowIcon className={styles.arrowIcon} />
            </Nav.Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default HomeView;

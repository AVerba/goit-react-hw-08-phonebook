import styles from './AppBar.module.css';
import { Navigation } from '../Navigation';
import { AuthNav } from '../AuthNav';
import { UserMenu } from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
        {isLoggedIn ? (
          <>
            <UserMenu />
          </>
        ) : (
          <>
            <AuthNav />
          </>
        )}
      </header>
    </Container>
  );
};

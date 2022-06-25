import styles from './AppBar.module.css';
import { Navigation } from '../Navigation';
import { AuthNav } from '../AuthNav';
import { UserMenu } from '../UserMenu';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

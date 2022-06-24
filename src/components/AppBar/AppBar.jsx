import styles from './AppBar.module.css';
import { Navigation } from '../Navigation';
import { AuthNav } from '../AuthNav';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

import styles from './HomeView.module.css';

export const HomeView = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Hello! Welcome to your personal organizer
      </h3>
      <span className={styles.subtitle}>
        {' '}
        here you can save all your notes, important dates, as well as contact
        details of people
      </span>
    </div>
  );
};

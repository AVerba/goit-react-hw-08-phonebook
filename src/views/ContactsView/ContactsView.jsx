import styles from './ContactsView.module.css';

import { ContactForm } from '../../components/ContactForm';
import { Container } from '../../components/Container/Container';

export const ContactsView = () => {
  return (
    <Container>
      <ul className={styles.contactscVies}>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>Add contacts info</h4>
          <ContactForm />
        </li>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>Contacts</h4>
        </li>
      </ul>
    </Container>
  );
};

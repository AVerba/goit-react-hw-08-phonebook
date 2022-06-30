import styles from './ContactsView.module.css';

import { ContactForm } from '../../components/Forms/ContactForm';
import { Container } from '../../components/Container/Container';
import { ContactList } from '../../components/ContactsList';

const ContactsView = () => {
  return (
    <Container>
      <ul className={styles.contactscVies}>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>Add contacts info</h4>
          <ContactForm />
        </li>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>Contacts</h4>
          <ContactList />
        </li>
      </ul>
    </Container>
  );
};
export default ContactsView;

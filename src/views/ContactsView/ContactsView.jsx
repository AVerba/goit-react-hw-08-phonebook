import styles from './ContactsView.module.css';

import { ContactForm } from '../../components/Forms/ContactForm';
import { Container } from '../../components/Container/Container';
import { ContactList } from '../../components/ContactsList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';

const ContactsView = () => {
  return (
    <Container>
      <ul className={styles.contactscVies}>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>Add contacts info</h4>
          <ContactForm />
          <h4 className={styles.contactsTitle}>Find contacts</h4>
          <ContactFilter />
        </li>
        <li className={styles.item}>
          <h4 className={styles.contactsTitle}>List of Contacts</h4>
          <ContactList />
        </li>
      </ul>
    </Container>
  );
};
export default ContactsView;

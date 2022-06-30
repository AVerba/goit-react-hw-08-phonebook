import styles from './ContactsView.module.css';

import { ContactForm } from '../../components/Forms/ContactForm';
import { Container } from '../../components/Container/Container';
import { ContactList } from '../../components/ContactsList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { authOperations, authSelectors } from '../../redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from '../../components/UI/Loader/Loader';

const ContactsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
      .unwrap()
      .catch(() => {
        Notify.warning(
          'Sorry, your authorization token expired, please relogin',
          {}
        );
        dispatch(authOperations.logOut());
      });
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  if (isFetchingCurrentUser) return <Loader />;

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

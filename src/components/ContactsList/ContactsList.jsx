import styles from './ContactsList.module.css';
import { ContactsItem } from './ContactItem';

import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsApi';
import { contactsSelectors } from '../../redux/contacts/contactsSelectors';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';

export const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const { filter } = useSelector(contactsSelectors.getFilter);
  const filter = '';
  const deleteItem = event => {
    deleteContact(event.currentTarget.parentNode.id);

    if (!isDeleting) {
      event.currentTarget.innerHTML = 'Deleting ...';
    }
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let renderedData = filter === '' ? contacts : filteredContacts();
  const renderList = (
    <ListGroup className={styles.contactsList}>
      {contacts &&
        renderedData.map(({ name, id, number }) => (
          <ListGroup.Item className={styles.listItem} key={id} id={id}>
            <div className={styles.info}>
              <span className={styles.contactName}>{name}: </span>
              <span className={styles.phoneNumber}>{number}</span>
            </div>
            <Button
              variant="primary"
              type="button"
              onClick={event => deleteItem(event)}
            >
              Delete contact
            </Button>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );

  return isLoading ? (
    <div>loading...</div>
  ) : contacts.length !== 0 ? (
    renderList
  ) : (
    'You have no contacts'
  );
};

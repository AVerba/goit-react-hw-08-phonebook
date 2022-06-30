import styles from './ContactsList.module.css';

import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsApi';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { getFilter } from '../../redux/contacts/contactsSlice';

export const ContactList = () => {
  const { data: contacts, isLoading, refetch } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { filter } = useSelector(getFilter);
  // const filter = '';

  const deleteItem = event => {
    deleteContact(event.currentTarget.parentNode.id);
    if (!isDeleting) {
      event.currentTarget.innerHTML = 'Deleting ...';
    }
  };
  useEffect(() => {
    refetch();
  }, [refetch]);
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

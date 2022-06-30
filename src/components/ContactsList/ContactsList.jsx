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
  const { data, isLoading, refetch } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { filter } = useSelector(getFilter);
  useEffect(() => {
    refetch();
  }, [refetch]);
  const deleteItem = event => {
    deleteContact(event.currentTarget.parentNode.id);
    if (!isDeleting) {
      event.currentTarget.innerHTML = 'Deleting ...';
    }
    refetch();
  };
  useEffect(() => {}, [refetch]);
  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let renderedData = filter === '' ? data : filteredContacts();
  const renderList = (
    <ListGroup className={styles.contactsList}>
      {data &&
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
  ) : data.length !== 0 ? (
    renderList
  ) : (
    'You have no contacts'
  );
};

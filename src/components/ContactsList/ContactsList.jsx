import styles from './ContactsList.module.css';

import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsApi';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { getFilter } from '../../redux/contacts/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from '../UI/Loader/Loader';

export const ContactList = () => {
  const {
    data: contacts,
    isLoading,
    refetch,
    isSuccess,
  } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteContactMutation();
  const { filter } = useSelector(getFilter);
  const [deleteId, setDeleteId] = useState(null);

  const deleteItem = (event, id) => {
    setDeleteId(id);
    deleteContact(id);
  };

  useEffect(() => {
    if (isDeleted) {
      Notify.success('Contact deleted');
      refetch();
    }
  }, [isDeleted]);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let renderedData = filter === '' ? contacts : filteredContacts();
  const renderList = (
    <ListGroup className={styles.contactsList}>
      {isSuccess &&
        renderedData.map(({ name, id, number }) => (
          <ListGroup.Item className={styles.listItem} key={id} id={id}>
            <div className={styles.info}>
              <span className={styles.contactName}>{name}: </span>
              <span className={styles.phoneNumber}>{number}</span>
            </div>
            {deleteId === id ? (
              <Button>Deleting...</Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                onClick={event => deleteItem(event, id)}
              >
                Delete contact
              </Button>
            )}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );

  return isLoading ? (
    <Loader />
  ) : contacts.length !== 0 ? (
    renderList
  ) : (
    'You have no contacts'
  );
};

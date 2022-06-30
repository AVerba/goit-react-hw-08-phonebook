import styles from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter, getFilter } from '../../redux/contacts/contactsSlice';

import Form from 'react-bootstrap/Form';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </Form.Group>
    </Form>
  );
};

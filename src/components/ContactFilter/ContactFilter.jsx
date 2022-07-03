import styles from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter, getFilter } from '../../redux/contacts/contactsSlice';

import Form from 'react-bootstrap/Form';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilter);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </Form.Group>
    </Form>
  );
};

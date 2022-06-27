import styles from './ContactForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import shortid from 'shortid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from '../Container/Container';
import { contactsOperations } from '../../redux/contacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsOperations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { authOperations } from '../../redux/auth';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|[(\+\(\))]|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactForm = () => {
  // const { data: contacts, isLoading } = useGetContactsQuery();
  // const [addContact, { isLoading: isUpdating, isSuccess: successfullyAdded }] =
  //   useAddContactMutation();
  const initState = {
    name: '',
    number: '',
  };
  const [initialValues, setInitialValues] = useState(initState);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(6, 'Name must be at least 6 characters')
      .max(20, 'Name must not exceed 20 characters')
      .matches(
        nameRegex,
        'Name is not valid its should contain only alphabet letters'
      ),
    number: Yup.string().matches(
      phoneRegExp,
      'Phone number is not valid its should contain only numbers'
    ),
  });
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const resetAllFields = () => {
    resetField('name');
    resetField('number');
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    const { name, number } = data;
    // dispatch(authOperations.register({ name, email, password }));
    resetAllFields();
    console.log({ id: shortid.generate(), name, number });
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };

  return (
    <div className={styles.contactForm}>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Contact name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact name"
            {...register('name')}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact phohe number"
            {...register('number')}
          />
          {errors.number && (
            <Form.Text className="text-danger">
              {errors.number.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={errors.number || errors.name}
        >
          Add contact
        </Button>
      </Form>
    </div>
  );
};

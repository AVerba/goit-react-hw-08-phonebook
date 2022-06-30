import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import shortid from 'shortid';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as Yup from 'yup';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from '../../../redux/contacts/contactsApi';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import regEx from '../../RegEx/RegEx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading: isUpdating, isSuccess: successfullyAdded }] =
    useCreateContactMutation();
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
        regEx.nameRegex,
        'Name is not valid its should contain only alphabet letters'
      ),
    number: Yup.string().matches(
      regEx.phoneRegExp,
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
    e.preventDefault();

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (successfullyAdded) {
      Notify.success(`Contact ${data.name} added successfully`);
    }
    addContact(contact);
    resetAllFields();
    console.log(data);
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };
  const disabledStatus = (numberError, nameError) => {
    if (numberError && !nameError) {
      return Notify.failure('Please enter contact name');
    }
    if (!nameError && nameError) {
      return Notify.failure('Please enter contact phone number');
    }
    return false;
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
          {isUpdating ? <>Adding...</> : <>Add contact</>}
        </Button>
      </Form>
    </div>
  );
};

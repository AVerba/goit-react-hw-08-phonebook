import { useState, useEffect } from 'react';

import { authOperations } from '../../../redux/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './RegisterForm.module.css';
import Loader from '../../UI/Loader/Loader';

export const RegisterForm = () => {
  const initState = {
    fullname: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  const [initialValues, setInitialValues] = useState(initState);
  const dispatch = useDispatch();
  const [loaderState, setLoaderState] = useState(false);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    name: Yup.string()
      .required('Name is required')
      .min(6, 'Name must be at least 6 characters')
      .max(20, 'Name must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
  const onSubmit = (data, e) => {
    setLoaderState(true);
    e.preventDefault();
    const { name, email, password } = data;
    dispatch(authOperations.register({ name, email, password }))
      .then(() => {
        setLoaderState(false);
        resetAllFields();
      })
      .catch(() => {
        setLoaderState(false);
        console.log('Mistakes in input fields');
      });
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };
  const resetAllFields = () => {
    resetField('fullname');
    resetField('name');
    resetField('email');
    resetField('password');
    resetField('confirmPassword');
    resetField('acceptTerms');
  };

  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      {loaderState && <Loader />}
      <Form
        formclassName={styles.formReg}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full name</Form.Label>

          <Form.Control
            type="text"
            placeholder="fullname"
            {...register('fullname')}
          />
          {errors.fullname && (
            <Form.Text className="text-danger">
              {errors.fullname.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>User name</Form.Label>

          <Form.Control
            type="text"
            placeholder="User name"
            {...register('name')}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email')}
          />
          {errors.email ? (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          ) : (
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              {errors.confirmPassword.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className={styles.checkbox} controlId="formBasicCheckbox">
          <Form.Check
            className={styles.check}
            type="checkbox"
            label="Accept Terms & "
            {...register('acceptTerms')}
          />
          <a href="#" className={styles.condition}>
            {' '}
            Conditions
          </a>
          {errors.acceptTerms && (
            <Form.Text className="text-danger">
              {errors.acceptTerms.message}
            </Form.Text>
          )}

          {/*className="mb-3"*/}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={initialValues.acceptTerms}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

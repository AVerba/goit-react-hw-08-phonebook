import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './RegisterView.module.css';

export const RegisterView = () => {
  const initState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  const [initialValues, setInitialValues] = useState(initState);
  useEffect(() => {
    console.log(initialValues.acceptTerms);
  }, [initialValues.acceptTerms]);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
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
    e.preventDefault();
    console.log('Values:::', data);
    resetAllFields();
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };
  const resetAllFields = () => {
    resetField('fullname');
    resetField('username');
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
    <div className={styles.container}>
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
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>User name</Form.Label>

          <Form.Control
            type="text"
            placeholder="User name"
            {...register('username')}
          />
          {errors.username && (
            <Form.Text className="text-danger">
              {errors.username.message}
            </Form.Text>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
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
    </div>
  );
};

import srtyles from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as Yup from 'yup';
import { authOperations } from '../../../redux/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import styles from '../../../views/LoginView/LoginView.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loader from '../../UI/Loader/Loader';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initState = {
    email: '',
    password: '',
  };
  const [initialValues, setInitialValues] = useState(initState);
  const [loaderState, setLoaderState] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });
  const onSubmit = (data, e) => {
    setLoaderState(true);
    e.preventDefault();
    const { email, password } = data;
    dispatch(authOperations.logIn({ email, password }))
      .then(response => {
        setLoaderState(false);
        resetAllFields();
      })
      .catch(() => {
        setLoaderState(false);
        console.log('pwong pass or login::');
      });
  };
  const onError = error => {
    console.log('ERROR:::', error);
  };
  const resetAllFields = () => {
    resetField('email');
    resetField('password');
  };

  const {
    register,
    handleSubmit,
    resetField,

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
        formclassName={styles.formLogin}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

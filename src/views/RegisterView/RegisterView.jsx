import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './RegisterView.module.css';

export const RegisterView = () => {
  return (
    <div className={styles.container}>
      <Form formclassName={styles.formReg}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className={styles.checkbox} controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
          <a href="#">terms</a>
          {/*className="mb-3"*/}
        </Form.Group>
        <Button variant="primary" type="submit" disabled>
          Submit
        </Button>
      </Form>
    </div>
  );
};

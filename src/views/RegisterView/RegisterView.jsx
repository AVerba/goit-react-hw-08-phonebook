import styles from './RegisterView.module.css';
import { ReactComponent as RegisterLogo } from '../../images/computer.svg';
import { RegisterForm } from '../../components/Forms/RegicterForm';

export const RegisterView = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <RegisterLogo className={styles.registerImg} />
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterView;

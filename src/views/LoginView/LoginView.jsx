import { ReactComponent as LoginLogo } from '../../images/login.svg';

import styles from './LoginView.module.css';
import { LoginForm } from '../../components/Forms/LoginForm';

const LoginView = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <LoginLogo className={styles.loginImg} />
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginView;

import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';

interface ISoftKeyProps {
  left?: string;
  right?: string;
  center?: string;
};

const SoftKeys = ({ left, right, center }: ISoftKeyProps) => {
  const history = useHistory();

  return (
    <section className={styles.softKey}>
      <label className={styles.softLeft}>{left}</label>
      <label className={styles.softCenter} onClick={() => history.push('/new')}>{center}</label>
      <label className={styles.softRight}>{right}</label>
    </section>
  );
};

export default SoftKeys;
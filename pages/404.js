import styles from '../styles/404.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.num1}>4</h1>
      <h1 className={styles.num2}>4</h1>
      <h4 className={styles.text}>Page Not Found</h4>
    </div>
  )
}

export default NotFound;
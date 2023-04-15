import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
        <div>
            
        </div>
        <ul className={styles.menuItem}>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Motor Cycles</a></li>
            <li><a href="#">Heavy</a></li>
            <li><a href="#">With Us</a></li>
        </ul>
    </div>
  )
}

export default Header
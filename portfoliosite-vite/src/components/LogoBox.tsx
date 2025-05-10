import styles from './LogoBox.module.css';
import logo from '../assets/logo.png'; // Change to .svg if needed
import { Link } from 'react-router-dom';

export default function LogoBox() {
    return (
        <div className={styles.logoBox}>
            <Link to="/" className={styles.logoLink}>
                <img src={logo} alt="Logo" className={styles.logoImg} />
                <span className={styles.hoverText}>Back</span>
            </Link>
        </div>
    );
} 
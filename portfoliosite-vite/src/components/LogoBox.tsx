import styles from './LogoBox.module.css';
import logo from '../assets/logo.png'; // Change to .svg if needed
import { Link } from 'react-router-dom';

export default function LogoBox() {
    return (
        <div className={styles.logoBox}>
            <Link to="/">
                <img src={logo} alt="Logo" className={styles.logoImg} />
            </Link>
        </div>
    );
} 
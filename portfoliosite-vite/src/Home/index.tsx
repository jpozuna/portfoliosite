import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
    
    
    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Link to="/projects" className={`${styles["black-square"]} ${styles.noUnderline}`}>
                    <div className={styles["square-content"]}>
                        <h1 className={styles.name}>Joshua Paulino Ozuna</h1>
                    </div>
                </Link>
                <div className={styles.navigation}>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/connect">Connect</Link>
                </div>
            </div>
        </div>
    );
}

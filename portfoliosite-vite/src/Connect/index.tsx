import styles from './Connect.module.css';
import homeStyles from '../Home/Home.module.css';
import LogoBox from '../components/LogoBox';
import { Link } from 'react-router-dom';

export default function Connect() {
    return (
        <>
            <LogoBox />
            <div className={homeStyles.app}>
                <div className={homeStyles.content}>
                    <h1 className={styles.title}>Let's Connect</h1>
                    <div className={styles.links}>
                        <a href="mailto:paulinoozuna.j@northeastern.edu">Email</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                    <div className={homeStyles.navigation}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

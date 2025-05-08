import styles from './Connect.module.css';
import homeStyles from '../Home/Home.module.css';
import LogoBox from '../components/LogoBox';

export default function Connect() {
    return (
        <>
            <LogoBox />
            <div className={homeStyles.app}>
                <div className={homeStyles.content}>
                    <h1 className={styles.title}>Let's Connect</h1>
                    <div className={styles.links}>
                        <a href="mailto:you@example.com">View Profile</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
}

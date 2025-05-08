import styles from './About.module.css';
import homeStyles from '../Home/Home.module.css';
import { Link } from 'react-router-dom';
import LogoBox from '../components/LogoBox';

export default function About() {
    return (
        <>
            <LogoBox />
            <div className={homeStyles.app}>
                <div className={homeStyles.content}>
                    <h1 className={styles.title}>About Me</h1>
                    <div className={styles.sections}>
                        <section className={styles.section}>
                            <h2>Background</h2>
                            <p>
                                I am a passionate software developer with a focus on creating elegant, 
                                efficient solutions to complex problems. My journey in technology 
                                has equipped me with a diverse set of skills and a deep understanding 
                                of modern development practices.
                            </p>
                        </section>
                        <section className={styles.section}>
                            <h2>Skills</h2>
                            <div className={styles.skills}>
                                <div className={styles.skillCategory}>
                                    <h3>Frontend</h3>
                                    <ul>
                                        <li>React</li>
                                        <li>TypeScript</li>
                                        <li>HTML/CSS</li>
                                        <li>Responsive Design</li>
                                    </ul>
                                </div>
                                <div className={styles.skillCategory}>
                                    <h3>Backend</h3>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Python</li>
                                        <li>SQL</li>
                                        <li>RESTful APIs</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className={styles.section}>
                            <h2>Experience</h2>
                            <div className={styles.experience}>
                                <div className={styles.job}>
                                    <h3>Software Developer</h3>
                                    <p className={styles.company}>Company Name</p>
                                    <p className={styles.duration}>2022 - Present</p>
                                    <ul>
                                        <li>Developed and maintained web applications</li>
                                        <li>Collaborated with cross-functional teams</li>
                                        <li>Implemented new features and optimizations</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={styles.navigation}>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/connect">Connect</Link>
                    </div>
                </div>
            </div>
        </>
    );
} 
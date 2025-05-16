import styles from './Projects.module.css';
import homeStyles from '../Home/Home.module.css';
import LogoBox from '../components/LogoBox';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <LogoBox />
      <h1 className={styles.title}>Projects</h1>
      <div className={homeStyles.app}>
        <div className={homeStyles.content}>
          <div className={styles.grid}>
            <div className={`${styles.project} ${styles.software} ${styles.project1}`}>
              <div className={styles.projectContent}>
                <h3>Canvas Clone</h3>
              
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View Project</a>
                  
                </div>
              </div>
            </div>
            <div className={`${styles.project} ${styles.design} ${styles.project2}`}>
              <div className={styles.projectContent}>
                <h3>Hello Xioma Website Redesign</h3>
            
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View</a>
                </div>
              </div>
            </div>
            <div className={`${styles.project} ${styles.software} ${styles.project3}`}>
              <div className={styles.projectContent}>
                <h3>Marble Solitaire Game</h3>
          
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View Project</a>
            
                </div>
              </div>
            </div>
            <div className={`${styles.project} ${styles.design} ${styles.project4}`}>
              <div className={styles.projectContent}>
                <h3>Summer@Cornish Website Redesign</h3>
              
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View</a>
                </div>
              </div>
            </div>
            <div className={`${styles.project} ${styles.software} ${styles.project5}`}>
              <div className={styles.projectContent}>
                <h3> Islands Of Hex Game</h3>
              
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View Project</a>
                 
                </div>
              </div>
            </div>
            <div className={`${styles.project} ${styles.design} ${styles.project6}`}>
              <div className={styles.projectContent}>
                <h3>Wellness App</h3>
              
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.link}>View </a>
                </div>
              </div>
            </div>    
          </div>
          <div className={styles.key}>
            <div className={styles.keyItem}>
              <div className={`${styles.keyBox} ${styles.software}`}></div>
              <span>Software Projects</span>
            </div>
            <div className={styles.keyItem}>
              <div className={`${styles.keyBox} ${styles.design}`}></div>
              <span>Design Projects</span>
            </div>
          </div>
          <div className={homeStyles.navigation}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/connect">Connect</Link>
          </div>
        </div>
      </div>
    </>
  );
}

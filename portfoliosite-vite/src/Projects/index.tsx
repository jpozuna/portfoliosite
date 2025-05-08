import styles from './Projects.module.css';
import homeStyles from '../Home/Home.module.css';
import LogoBox from '../components/LogoBox';

export default function Projects() {
  return (
    <>
      <LogoBox />
      <div className={homeStyles.app}>
        <div className={homeStyles.content}>
          <div className={styles.grid}>
            <div className={styles.projectLarge}>Project</div>
            <div className={styles.projectSmall}>Project</div>
            <div className={styles.projectMedium}>Project</div>
            <div className={styles.projectSmall}>Project</div>
            <div className={styles.quote}>A quote or a poem can be inserted here</div>
            <div className={styles.projectMedium}>Project</div>
            <div className={styles.projectSmall}>Project</div>
            <div className={styles.projectSmall}>Project</div>
            <div className={styles.projectMedium}>Project</div>
            {/* Add more blocks as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

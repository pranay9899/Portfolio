import styles from './Skills.module.css'; // Import CSS module
import skillsData from '../../data/skills'; // Import skills data

function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h3 className={styles.skillsHeading}>My Skills</h3>
            <div className={styles.skillsGrid}>
                {skillsData.map((skillCategory) => (
                    <div key={skillCategory.category} className={styles.categoryCard}>
                        <h4 className={styles.categoryTitle}>{skillCategory.category}</h4>
                        <ul className={styles.skillList}>
                            {skillCategory.skills.map((skill, index) => (
                                <li key={index} className={styles.skillItem}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
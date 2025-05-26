import styles from './Skills.module.css'; // Importing CSS modules for styling the Skills component
import skillsData from '../../data/skills'; // Importing skills data from a local JSON or JS file

function Skills() {
    return (
        <div className={styles.skillsContainer}>
            {/* Main heading for the skills section */}
            <h3 className={styles.skillsHeading}>My Skills</h3>
            {/* Grid layout for displaying different skill categories */}
            <div className={styles.skillsGrid}>
                {/* Mapping through skill categories from skillsData */}
                {skillsData.map((skillCategory) => (
                    // Each skill category is rendered as a card
                    <div key={skillCategory.category} className={styles.categoryCard}>
                        {/* Title of the skill category (e.g., 'Frontend', 'Backend') */}
                        <h4 className={styles.categoryTitle}>{skillCategory.category}</h4>
                        {/* List of individual skills within the category */}
                        <ul className={styles.skillList}>
                            {/* Mapping through skills within the current category */}
                            {skillCategory.skills.map((skill, index) => (
                                // Each skill is rendered as a list item
                                <li key={index} className={styles.skillItem}>
                                    {skill} {/* Displaying the skill name */}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills; // Exporting the Skills component for use in other parts of the application
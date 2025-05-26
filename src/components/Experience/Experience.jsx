import experienceData from '../../data/Experience'; // Imports the experience data array from a local file.
import styles from './Experience.module.css'; // Imports CSS modules for styling the Experience component.

/**
 * Experience component displays a list of professional work experiences.
 * It fetches experience details from `experienceData` and renders them dynamically.
 */
function Experience() {
    return (
        <div className={styles.experienceSection}>
            {/* Main heading for the Work Experience section */}
            <h3 className={styles.experienceHeading}>Work Experience</h3>

            {/* Container for all individual experience entries */}
            <div className={styles.experienceEntriesContainer}>
                {/* Maps over the experienceData array to render each experience entry */}
                {experienceData.map((entry) => (
                    // Each experience entry is a div with a unique key based on its ID
                    <div key={entry.id} className={styles.experienceEntry}>
                        {/* Displays the job title or role */}
                        <h4 className={styles.title}>{entry.title}</h4>
                        {/* Displays the company name and location */}
                        <p className={styles.company}>{entry.company} | {entry.location}</p>
                        {/* Displays the duration of the employment */}
                        <p className={styles.duration}>{entry.duration}</p>
                        {/* Conditionally renders a list of responsibilities if they exist */}
                        {entry.responsibilities && (
                            <ul className={styles.responsibilitiesList}>
                                {/* Maps over the responsibilities array to render each item as a list item */}
                                {entry.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li> // Using index as key; unique ID preferred if order changes
                                ))}
                            </ul>
                        )}
                        {/* Conditionally renders a list of technologies used if they exist */}
                        {entry.technologies && (
                            <div className={styles.technologies}>
                                {/* Maps over the technologies array to render each tech as a tag */}
                                {entry.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>{tech}</span> // Using index as key; unique ID preferred
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience; // Exports the Experience component for use in other parts of the application.
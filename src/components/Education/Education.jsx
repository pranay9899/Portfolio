import educationData from '../../data/Education'; // Imports the education data array from a local file.
import styles from './Education.module.css'; // Imports CSS modules for styling the Education component.

/**
 * Education component displays a list of educational qualifications.
 * It fetches education details from `educationData` and renders them dynamically.
 */
function Education() {
    return (
        <div className={styles.educationSection}>
            {/* Main heading for the Education section */}
            <h3 className={styles.educationHeading}>Education</h3>

            {/* Container for all individual education entries */}
            <div className={styles.educationEntriesContainer}>
                {/* Maps over the educationData array to render each education entry */}
                {educationData.map((entry) => (
                    // Each education entry is a div with a unique key based on its ID
                    <div key={entry.id} className={styles.educationEntry}>
                        {/* Displays the degree/qualification title */}
                        <h4 className={styles.degree}>{entry.degree}</h4>
                        {/* Displays the institution name */}
                        <p className={styles.institution}>{entry.institution}</p>
                        {/* Displays the duration of the education */}
                        <p className={styles.duration}>{entry.duration}</p>
                        {/* Conditionally renders GPA if it exists in the data */}
                        {entry.gpa && <p className={styles.gpa}>{entry.gpa}</p>}
                        {/* Conditionally renders a list of details if they exist */}
                        {entry.details && (
                            <ul className={styles.educationDetailsList}>
                                {/* Maps over the details array to render each detail as a list item */}
                                {entry.details.map((detail, index) => (
                                    <li key={index}>{detail}</li> // Uses index as key, consider a unique ID for better performance if details change order
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education; // Exports the Education component for use in other parts of the application.
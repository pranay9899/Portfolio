import { Link } from 'react-router-dom'; // Importing Link for navigation to project details
import styles from './ProjectCard.module.css'; // Importing CSS modules for styling the project card

function ProjectCard({ project }) {
    // Destructuring project properties for easier access
    const { id, title, description, image, technologies } = project;

    return (
        <div className={styles.card}>
            {/* Project image display */}
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                {/* Project title */}
                <h3 className={styles.title}>{title}</h3>
                {/* Project description */}
                <p className={styles.description}>{description}</p>
                {/* Technologies used in the project, mapped to individual tags */}
                <div className={styles.technologies}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Links section for the project */}
                <div className={styles.links}>
                    {/* Link to the detailed project page */}
                    <Link to={`/projects/${id}`} className={styles.detailsButton}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard; // Exporting the ProjectCard component for use in other parts of the application
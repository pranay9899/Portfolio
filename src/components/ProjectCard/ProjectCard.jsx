import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
    const { id, title, description, image, technologies } = project;

    return (
        <div className={styles.card}>
            {/* Project image */}
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                {/* Project title */}
                <h3 className={styles.title}>{title}</h3>
                {/* Project description */}
                <p className={styles.description}>{description}</p>
                {/* Technologies used in the project */}
                <div className={styles.technologies}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Links section - only View Details button here */}
                <div className={styles.links}>
                    {/* Link to the project detail page */}
                    <Link to={`/projects/${id}`} className={styles.detailsButton}>
                        View Details
                    </Link>
                    {/* REMOVED: Live Demo and GitHub buttons from here */}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
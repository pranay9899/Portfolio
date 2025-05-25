// src/pages/ProjectDetail/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import projectsData from '../../data/projects'; // Import your project data
import styles from './ProjectDetails.module.css'

function ProjectDetail() {
    const { projectId } = useParams(); // Get the project ID from the URL parameters
    const project = projectsData.find((p) => p.id === projectId); // Find the project in your data

    // If project is not found, display a message
    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist.</p>
                <Link to="/projects" className={styles.backButton}>Back to Projects</Link>
            </div>
        );
    }

    // Destructure project properties for display
    const { title, description, detailedDescription, image, technologies, liveLink, githubLink } = project;

    return (
        <section className={styles.projectDetailSection}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
            </div>

            <div className={styles.detailsContent}>
                <p className={styles.description}>{detailedDescription || description}</p> {/* Use detailedDescription if available, else fallback to description */}

                <div className={styles.techStack}>
                    <h3>Technologies Used:</h3>
                    <div className={styles.technologies}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={styles.techTag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.links}>
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                            View Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                            View GitHub Repo
                        </a>
                    )}
                </div>

                <Link to="/projects" className={styles.backButton}>Back to All Projects</Link>
            </div>
        </section>
    );
}

export default ProjectDetail;
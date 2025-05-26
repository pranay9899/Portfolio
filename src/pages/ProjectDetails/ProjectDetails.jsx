import { useParams, Link } from 'react-router-dom'; // Imports useParams to extract URL parameters and Link for navigation.
import projects from '../../data/Projects'; // Corrected: Ensure the filename capitalization matches (lowercase 'p' if the file is 'projects.js')
import styles from './ProjectDetails.module.css'; // Imports CSS modules for styling.

function ProjectDetail() {
    const { projectId } = useParams(); // Extracts the 'projectId' from the URL, e.g., 'learn-sphere'.
    // Finds the project object in the 'projects' array that matches the extracted projectId.
    const project = projects.find((p) => p.id === projectId);

    // If no project is found with the given ID, display a "not found" message.
    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project Not Found</h2>
                <p>The project you're looking for doesn't exist.</p>
                <Link to="/projects" className={styles.backButton}>Back to Projects</Link> {/* Link to navigate back to the projects list. */}
            </div>
        );
    }

    // Destructures properties from the found project object for easier access in JSX.
    const { title, description, detailedDescription, image, technologies, liveLink, githubLink } = project;

    return (
        <section className={styles.projectDetailSection}>
            <h2 className={styles.title}>{title}</h2> {/* Displays the project title. */}
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} /> {/* Displays the project image. */}
            </div>

            <div className={styles.detailsContent}>
                {/* Displays the detailed description if available, otherwise falls back to the shorter description. */}
                <p className={styles.description}>{detailedDescription || description}</p>

                <div className={styles.techStack}>
                    <h3>Technologies Used:</h3>
                    <div className={styles.technologies}>
                        {/* Maps through the technologies array and renders each as a 'techTag' span. */}
                        {technologies.map((tech, index) => (
                            <span key={index} className={styles.techTag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.links}>
                    {/* Conditionally renders the "View Live Demo" link if liveLink exists. */}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                            View Live Demo
                        </a>
                    )}
                    {/* Conditionally renders the "View GitHub Repo" link if githubLink exists. */}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                            View GitHub Repo
                        </a>
                    )}
                </div>

                {/* Link to navigate back to the main projects page. */}
                <Link to="/projects" className={styles.backButton}>Back to All Projects</Link>
            </div>
        </section>
    );
}

export default ProjectDetail; // Exports the ProjectDetail component.
import styles from './Projects.module.css'; // Import CSS module for styling this component.
import projects from '../../data/Projects'; // Corrected import: Assuming '../../data/projects.js' exports a default named 'projects'.
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import the ProjectCard component used to display individual projects.

function Projects() {
    return (
        <section className={styles.projectsSection}> {/* Main section container for the projects page. */}
            <h2 className={styles.heading}>My Projects</h2> {/* Main heading for the projects section. */}
            <p className={styles.subheading}>
                Here are some of the projects I've worked on, showcasing my skills and passion.
                Each project reflects my approach to problem-solving and development. {/* Subheading providing an introduction to the projects. */}
            </p>
            <div className={styles.projectsGrid}> {/* Grid container for displaying project cards. */}
                {/* This is the key part:
                  We map over the 'projects' array (which is the data imported from '../../data/projects.js').
                  For each 'project' object in the array, we render a 'ProjectCard' component.
                  'key={project.id}' is crucial for React to efficiently update lists.
                  'project={project}' passes the entire project object as a prop to the ProjectCard.
                */}
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects; // Exports the Projects component for use in your application's routing.
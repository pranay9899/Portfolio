// src/pages/Projects/Projects.jsx
import React from 'react';
import styles from './Projects.module.css'; // Import CSS module
import projectsData from '../../data/projects'; // Import your project data
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import the ProjectCard component

function Projects() {
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.heading}>My Projects</h2>
            <p className={styles.subheading}>
                Here are some of the projects I've worked on, showcasing my skills and passion.
                Each project reflects my approach to problem-solving and development.
            </p>
            <div className={styles.projectsGrid}>
                {/* This is the key part: mapping through projectsData and rendering ProjectCard */}
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
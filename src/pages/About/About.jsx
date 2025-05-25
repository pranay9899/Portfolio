// src/pages/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import Skills from '../../components/Skills/Skills'; // Import the Skills component

function About() {
    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.heading}>About Me</h2>
            <div className={styles.contentWrapper}>
                <div className={styles.profileInfo}>
                    {/* Your profile picture - make sure to place one in public/assets/ */}
                    <img src="/assets/profile-pic.jpg" alt="Pranay Goud Nyalapatla" className={styles.profileImage} />
                    <p className={styles.bio}>
                        Hello! I'm Pranay Goud Nyalapatla, a creative and motivated Software Developer Fresher. [cite: 1, 2]
                        I have a passion for building user-centric full-stack applications. [cite: 2] My journey in tech began
                        with a B.Tech in Computer Science and Engineering from Sri Indu College of Engineering and Technology, Hyderabad,
                        graduating in May 2023 with a CGPA of 7.8/10.0. [cite: 7, 8]
                    </p>
                    <p className={styles.bio}>
                        During my Java Full Stack Development internship at KodNest in Bengaluru, I gained intensive practical experience
                        in Java, Spring Boot, React.js, and MySQL by actively contributing to a simulated real-world project. [cite: 4]
                        I applied learned concepts to develop functional modules, enhancing my understanding of the Software
                        Development Life Cycle (SDLC) and Agile methodologies. [cite: 5] I also honed my technical problem-solving
                        and teamwork skills through collaboration and feedback integration. [cite: 6]
                    </p>
                    <p className={styles.bio}>
                        I thrive on solving complex problems and am always eager to learn new technologies. My expertise spans
                        frontend development with React.js and backend APIs with Spring Boot. [cite: 3] I am committed to developing
                        impactful software solutions in a collaborative team environment. [cite: 3]
                    </p>
                </div>
                {/* Skills component to display your technical abilities */}
                <Skills />
            </div>
        </section>
    );
}

export default About;
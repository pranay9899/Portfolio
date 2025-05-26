// src/pages/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.homeSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.greeting}>Hi, I'm <span className={styles.name}>Pranay Goud Nyalapatla</span></h1>
                <p className={styles.tagline}>A <span className={styles.profession}>Software Developer Fresher</span> with a passion for building user-centric full-stack applications.</p>
                <p className={styles.introText}>
                    Eager to leverage hands-on project and internship experience in Java, Spring Boot, and React.js to
                    contribute effectively to a collaborative team environment and develop impactful software solutions.
                    Welcome to my digital space! Explore my projects to see how I turn ideas into reality.
                </p>
                <p>Please checkout my profile</p>
                <div className={styles.ctaButtons}>
                    <a href="/projects" className={styles.buttonPrimary}>View My Work</a>
                    <a href="/contact" className={styles.buttonSecondary}>Get In Touch</a>
                </div>
            </div>
            {/* Optional: Add a hero image related to development or yourself */}
            {/* <img src="/assets/your-hero-image.png" alt="Pranay Goud Nyalapatla" className={styles.heroImage} /> */}
        </section>
    );
}

export default Home;
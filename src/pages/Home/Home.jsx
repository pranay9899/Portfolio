import { Link } from 'react-router-dom'; // Imports the Link component from react-router-dom for navigation.
import styles from './Home.module.css'; // Imports CSS modules for styling the Home component.

function Home() {
    return (
        <section className={styles.homeSection}> {/* Main section for the home page. */}
            <div className={styles.heroContent}> {/* Container for the main content of the hero section. */}
                <h1 className={styles.greeting}>
                    Hi, I'm <span className={styles.name}>Pranay Goud Nyalapatla</span> {/* Greeting with the name highlighted. */}
                </h1>
                <p className={styles.tagline}>
                    A <span className={styles.profession}>Software Developer Fresher</span> with a passion for building user-centric full-stack applications. {/* Tagline describing the professional role and passion. */}
                </p>
                <p className={styles.introText}>
                    Eager to leverage hands-on project and internship experience in Java, Spring Boot, and React.js to
                    contribute effectively to a collaborative team environment and develop impactful software solutions.
                    Welcome to my digital space! Explore my projects to see how I turn ideas into reality. {/* Detailed introductory text. */}
                </p>
                <div className={styles.ctaButtons}> {/* Container for Call-to-Action buttons. */}
                    {/* Link to the projects page */}
                    <Link to="/projects" className={styles.buttonPrimary}>View My Work</Link>
                    {/* Link to the contact page */}
                    <Link to="/contact" className={styles.buttonSecondary}>Get In Touch</Link>
                </div>
            </div>
        </section>
    );
}

export default Home; // Exports the Home component for use in routing.
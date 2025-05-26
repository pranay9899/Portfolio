import styles from './About.module.css'; // Imports CSS modules for styling the About page.
import Skills from '../../components/Skills/Skills'; // Imports the Skills component to display skill sets.

function About() {
    // Constructs the path to the profile image using import.meta.env.BASE_URL for correct asset loading in Vite.
    const profileImagePath = `${import.meta.env.BASE_URL}assets/profile-pic.jpg`;

    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.heading}>About Me</h2> {/* Main heading for the About section. */}
            <div className={styles.contentWrapper}>
                <div className={styles.profileInfo}>
                    <img
                        src={profileImagePath} // Sets the source of the profile image.
                        alt="Pranay Goud Nyalapatla" // Alternative text for accessibility.
                        className={styles.profileImage} // Applies specific styles to the image.
                    />
                    <p className={styles.bio}>
                        Hello! I'm Pranay Goud Nyalapatla, a creative and motivated Software Developer Fresher.
                        I have a passion for building user-centric full-stack applications. My journey in tech began
                        with a B.Tech in Computer Science and Engineering from Sri Indu College of Engineering and Technology, Hyderabad,
                        graduating in May 2023 with a CGPA of 7.8/10.0.
                    </p>
                    <p className={styles.bio}>
                        During my Java Full Stack Development internship at KodNest in Bengaluru, I gained intensive practical experience
                        in Java, Spring Boot, React.js, and MySQL by actively contributing to a simulated real-world project.
                        I applied learned concepts to develop functional modules, enhancing my understanding of the Software
                        Development Life Cycle (SDLC) and Agile methodologies. I also honed my technical problem-solving
                        and teamwork skills through collaboration and feedback integration.
                    </p>
                    <p className={styles.bio}>
                        I thrive on solving complex problems and am always eager to learn new technologies. My expertise spans
                        frontend development with React.js and backend APIs with Spring Boot. I am committed to developing
                        impactful software solutions in a collaborative team environment.
                    </p>
                </div>
                <Skills /> {/* Renders the Skills component, displaying a breakdown of abilities. */}
            </div>
        </section>
    );
}

export default About; // Exports the About component for use in routing.
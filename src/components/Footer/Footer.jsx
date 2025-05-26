import styles from './Footer.module.css'; // Importing CSS modules for styling
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing social media icons from react-icons

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                {/* Social media links */}
                {/* GitHub profile link */}
                <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                {/* LinkedIn profile link */}
                <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                {/* Email link */}
                <a href="mailto:npranay9899@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
            {/* Copyright information */}
            <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Pranay Goud Nyalapatla. All rights reserved.
            </p>
            {/* Credit for technologies used */}
            <p className={styles.credit}>
                Built with React & Vite
            </p>
        </footer>
    );
}

export default Footer; // Exporting the Footer component for use in other parts of the application
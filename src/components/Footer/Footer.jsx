import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                { }
                <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:npranay9899@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
            <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Pranay Goud Nyalapatla. All rights reserved.
            </p>
            <p className={styles.credit}>
                Built with React & Vite
            </p>
        </footer>
    );
}

export default Footer;
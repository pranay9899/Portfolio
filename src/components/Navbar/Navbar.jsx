// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react'; // Importing React and the useState hook for managing component state
import { Link, NavLink } from 'react-router-dom'; // Importing Link for navigation and NavLink for active link styling
import styles from './Navbar.module.css'; // Importing CSS modules for styling
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons from react-icons

function Navbar() {
    // State to manage the open/closed status of the mobile navigation menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu's open state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the mobile menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* Logo with initials, links to home and closes menu on click */}
                <Link to="/" onClick={closeMenu} className={styles.logoInitialsLink}>
                    <span className={styles.logoInitials}>PG</span> {/* Displaying initials as the logo */}
                </Link>
            </div>

            {/* Hamburger icon for mobile navigation, toggles menu on click */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />} {/* Shows close icon when open, hamburger when closed */}
            </div>

            {/* Navigation links, dynamically applies 'open' class if menu is open */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li>
                    {/* Home link, closes menu on click and applies active style if it's the current route */}
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    {/* About link, closes menu on click and applies active style if it's the current route */}
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        About
                    </NavLink>
                </li>
                <li>
                    {/* Projects link, closes menu on click and applies active style if it's the current route */}
                    <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    {/* Contact link, closes menu on click and applies active style if it's the current route */}
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar; // Exporting the Navbar component for use throughout the application
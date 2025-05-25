// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ensure react-icons is installed

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* Option 3: Initials-Based Logo */}
                <Link to="/" onClick={closeMenu} className={styles.logoInitialsLink}>
                    <span className={styles.logoInitials}>PG</span> {/* Your Initials */}
                </Link>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? styles.active : undefined}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
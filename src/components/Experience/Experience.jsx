// src/components/Experience/Experience.jsx
import React from 'react';
import experienceData from '../../data/Experience';
import styles from './Experience.module.css';

function Experience() {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.experienceHeading}>Work Experience</h3>
            <div className={styles.experienceEntriesContainer}>
                {experienceData.map((entry) => (
                    <div key={entry.id} className={styles.experienceEntry}>
                        <h4 className={styles.title}>{entry.title}</h4>
                        <p className={styles.company}>{entry.company} | {entry.location}</p>
                        <p className={styles.duration}>{entry.duration}</p>

                        {entry.responsibilities && (
                            <ul className={styles.responsibilitiesList}>
                                {entry.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        )}

                        {entry.technologies && (
                            <div className={styles.technologies}>
                                {entry.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                        )}

                        {/* NEW: Display Certifications */}
                        {entry.certifications && entry.certifications.length > 0 && (
                            <div className={styles.certificationsContainer}>
                                <h5 className={styles.certificationsHeading}>Certifications:</h5>
                                <ul className={styles.certificationsList}>
                                    {entry.certifications.map((cert, index) => (
                                        <li key={index} className={styles.certificationItem}>
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
                                                    {cert.name}
                                                </a>
                                            ) : (
                                                <span>{cert.name}</span>
                                            )}
                                            {cert.issuer && ` - ${cert.issuer}`}
                                            {cert.date && ` (${cert.date})`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
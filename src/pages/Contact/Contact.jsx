import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    // UPDATED: Corrected the resumePath to 'Resume.pdf'
    const resumePath = `${import.meta.env.BASE_URL}Resume.pdf`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.target;
        const url = form.action;
        const data = new FormData(form);

        try {
            const response = await fetch(url, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const result = await response.json();
                setStatus(result.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Failed to send message. Network error.');
        }
    };

    return (
        <section className={styles.contactSection}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <p className={styles.subheading}>
                Have a question or want to work together? Fill out the form below or reach out directly.
            </p>

            <div className={styles.contactContent}>
                {/* Contact Form */}
                <form className={styles.contactForm} onSubmit={handleSubmit} action="https://formspree.io/f/mgvkjygr" method="POST">
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles.textareaField}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                    {status && <p className={styles.statusMessage}>{status}</p>}
                </form>

                {/* Direct Contact Information and Resume Button */}
                <div className={styles.contactInfo}>
                    {/* Resume Download Button is now the first child here */}
                    <a
                        href={resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeButton}
                    >
                        Download Resume
                    </a>

                    <h3>Direct Contact</h3>
                    <p>Email: <a href="mailto:npranay9899@gmail.com">npranay9899@gmail.com</a></p>
                    <p>Mobile: 9346718265</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer">pranaynyalapatla</a></p>
                    <p>GitHub: <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer">pranay9899</a></p>
                    <p>Location: Hyderabad, Telangana, India</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
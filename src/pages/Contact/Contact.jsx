// src/pages/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    // You can keep formData and handleChange if you want to validate client-side
    // but Formspree handles the submission, so you might not need the useState for form data.
    // For simplicity, we'll keep it for now.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // For Formspree, you typically remove the custom handleSubmit,
    // and let the browser's default form submission handle it.
    // However, you can still use a custom handleSubmit if you want to
    // show a custom status message after a successful Formspree submission.

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission initially
        setStatus('Sending...');

        const form = e.target; // Get the form element
        const url = form.action; // Formspree URL from action attribute
        const data = new FormData(form); // Create FormData object

        try {
            const response = await fetch(url, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json' // Essential for Formspree to return JSON status
                }
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
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
                { }
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

                <div className={styles.contactInfo}>
                    <h3>Direct Contact</h3>
                    <p>Email: <a href="mailto:npranay9899@gmail.com">npranay9899@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/pranaynyalapatla/" target="_blank" rel="noopener noreferrer">pranaynyalapatla</a></p>
                    <p>GitHub: <a href="https://github.com/pranay9899" target="_blank" rel="noopener noreferrer">pranay9899</a></p>
                    <p>Location: Hyderabad, Telangana, India</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
// src/data/ExperienceData.js

const experienceData = [
    {
        id: 'kodnest-internship',
        title: 'Java Full Stack Development Intern',
        company: 'KodNest',
        location: 'Bengaluru, India',
        duration: 'October 2022 - April 2023', // Adjust dates as per your actual internship
        responsibilities: [
            'Actively contributed to the development of full-stack applications using Java, Spring Boot, React.js, and MySQL in a simulated real-world project environment.',
            'Designed and implemented RESTful APIs for secure data management and integrated them with interactive React.js frontends.',
            'Gained intensive practical experience in the Software Development Life Cycle (SDLC) and Agile methodologies, participating in daily stand-ups and sprint reviews.',
            'Honed technical problem-solving and teamwork skills through collaborative coding, code reviews, and integration of feedback.',
        ],
        technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'RESTful APIs', 'Git', 'Agile'],
        // NEW: Add a certifications array for certs obtained during or directly related to this experience
        certifications: [
            {
                name: 'Java Full Stack Development Certificate',
                issuer: 'KodNest',
                date: 'March 2025',
                link: 'https://production-resume-builder.s3.ap-south-1.amazonaws.com/certificates/KODRBE75K-Pranay%20Goud%20Nyalapatla/certificate.pdf'
            },
            // Add more certifications here if applicable to this experience
        ],
    },

];

export default experienceData;
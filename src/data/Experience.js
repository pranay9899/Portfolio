// src/data/ExperienceData.js

// Defines an array of objects, where each object represents a single work experience entry.
const experienceData = [
    {
        id: 'kodnest-internship', // A unique identifier for this experience entry. Useful for keys in React lists.
        title: 'Java Full Stack Development Intern', // The job title or role.
        company: 'KodNest', // The name of the company or organization.
        location: 'Bengaluru, India', // The location of the work/internship.
        duration: 'October 2022 - April 2023', // The period of time spent in this role.
        responsibilities: [
            // An array of strings, each describing a key responsibility or achievement in this role.
            // These should ideally be action-oriented and highlight impact.
            'Actively contributed to the development of full-stack applications using Java, Spring Boot, React.js, and MySQL in a simulated real-world project environment.',
            'Designed and implemented RESTful APIs for secure data management and integrated them with interactive React.js frontends.',
            'Gained intensive practical experience in the Software Development Life Cycle (SDLC) and Agile methodologies, participating in daily stand-ups and sprint reviews.',
            'Honed technical problem-solving and teamwork skills through collaborative coding, code reviews, and integration of feedback.',
        ],
        technologies: [
            // An array of strings, listing the key technologies used in this role.
            'Java',
            'Spring Boot',
            'React.js',
            'MySQL',
            'RESTful APIs',
            'Git',
            'Agile'
        ],
    },
];

// Exports the experienceData array as the default export, making it available
// for import in other components (e.g., in the Experience.jsx component).
export default experienceData;
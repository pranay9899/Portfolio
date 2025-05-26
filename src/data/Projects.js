const projects = [
    {
        id: 'learn-sphere', // Unique identifier for the project
        title: 'Learn Sphere', // Title of the project
        description: 'Developed an end-to-end online learning platform by engineering a robust Spring Boot backend with RESTful APIs for secure data management and an interactive React.js frontend for dynamic user experience.', // Concise description for card view
        detailedDescription: 'Developed an end-to-end online learning platform by engineering a robust Spring Boot backend with RESTful APIs for secure data management and an interactive React.js frontend for dynamic user experience. Implemented core functionalities including user authentication, course management, and content delivery, demonstrating proficiency in object-oriented programming and database integration. Managed code versions and collaborated effectively using Git, ensuring maintainable and scalable code. This project highlights my ability to build complex, full-stack applications from concept to deployment.', // Detailed description for the project's dedicated page
        image: 'https://placehold.co/600x400/E0F7FA/00796B?text=Learn+Sphere', // URL for the project image
        technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Git'], // Array of technologies used
        liveLink: '#', // Link to the live demo or deployed application (currently GitHub repo)
        githubLink: 'https://github.com/pranay9899/LearnSphere.git', // Link to the GitHub repository
    },
    {
        id: 'tune-hub',
        title: 'Tune Hub',
        description: 'Engineered a dynamic music streaming web application utilizing React.js for a responsive user interface and Spring Boot for robust backend services.',
        detailedDescription: 'Engineered a dynamic music streaming web application utilizing React.js for a responsive user interface and Spring Boot for robust backend services. Designed and implemented key features such as real-time music streaming, customizable playlists, and user song likes, enhancing user engagement and interactivity. Utilized MySQL for efficient data storage and Git for efficient version control throughout the development lifecycle. This project demonstrates my capabilities in creating interactive and data-driven web applications.',
        image: 'https://placehold.co/600x400/FFF3E0/E65100?text=Tune+Hub',
        technologies: ['React.js', 'Spring Boot', 'MySQL', 'Git'],
        liveLink: '#',
        githubLink: 'https://github.com/pranay9899/com.tunehub.2.0.git',
    },
    {
        id: 'shop-nest', // Unique identifier for the project
        title: 'ShopNest', // Title of the project
        description: 'A secure and scalable e-commerce website with features like product Browse, shopping cart, and payment processing.', // Concise description combining key aspects
        detailedDescription: 'Developed a comprehensive e-commerce platform, **ShopNest**, using **Spring Boot** for the robust backend, **React** for an interactive frontend, and **MySQL** for data management. Initially built with **Java EE (Servlet & JSPs)**, the platform was later evolved to a modern stack. Key features include secure user authentication, efficient product management, a fully functional shopping cart, and seamless payment gateway integration. The project showcases the ability to build a user-friendly and scalable online shopping experience.', // Detailed description combining and enhancing both provided texts
        image: 'https://placehold.co/600x400/D1C4E9/5E35B1?text=ShopNest', // Example placeholder image for ShopNest
        technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Java EE (Servlets & JSPs)'], // Array of technologies used
        liveLink: '#', // Placeholder if no live link is available yet
        githubLink: 'https://github.com/pranay9899/ShopNest.git', // **Important: Replace with your actual GitHub link**
    },
    {
        id: 'tic-tac-toe',
        title: 'Tic-Tac-Toe Game',
        description: 'A classic Tic-Tac-Toe game built using fundamental web technologies: HTML, CSS, and JavaScript. Perfect for a quick, fun challenge!',
        detailedDescription: 'A simple yet engaging **Tic-Tac-Toe game** implemented using the core building blocks of web development: **HTML** for structure, **CSS** for styling, and **JavaScript** for game logic and interactivity. This project serves as a foundational example of creating interactive web applications, demonstrating basic DOM manipulation, event handling, and conditional game flow. It is a great illustration of how essential web technologies can be combined to deliver a complete, playable experience.',
        image: 'https://placehold.co/600x400/C8E6C9/2E7D32?text=Tic-Tac-Toe', // Example placeholder image for Tic-Tac-Toe
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://pranay9899.github.io/Tick-Tack-Toe/', // **Important: Replace with your actual live demo link**
        githubLink: 'https://github.com/pranay9899/Tick-Tack-Toe.git', // **Important: Replace with your actual GitHub link**
    },
    {
        id: 'weather-report-management',
        title: 'Weather Report Management System',
        description: 'A web-based application for managing and analyzing weather conditions, including an alert system.',
        detailedDescription: 'Developed a comprehensive **Web-based Weather Report Management System** designed to provide users with real-time weather information and advanced analysis. Key functionalities include retrieving and displaying current weather data, historical weather trends, and an **alert system** for specific weather conditions at designated locations. This project demonstrates proficiency in building robust web applications capable of consuming external APIs, processing data, and presenting it through a user-friendly interface to help users stay informed about the latest weather conditions.',
        image: 'https://placehold.co/600x400/CFD8DC/455A64?text=Weather+App', // Placeholder image
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Weather API'], // Example technologies, adjust based on what you used
        liveLink: '#', // Not deployed
        githubLink: '#', // Not on GitHub
    },
    {
        id: 'multi-traffic-scene-perception-ml',
        title: 'Multi Traffic Scene Perception Using Supervised Learning',
        description: 'A machine learning model (80% accuracy) to improve driving experience under critical weather conditions.',
        detailedDescription: 'Developed a sophisticated **Machine Learning model for Multi Traffic Scene Perception**, specifically designed to enhance driving safety and experience under challenging weather conditions. This project leveraged **supervised learning techniques** to analyze diverse traffic scenes, achieving an impressive **80% accuracy** in identifying and interpreting critical elements. Utilizing **image recognition** capabilities, the model processes visual data to provide insights. The project culminated in a **user-friendly interface** that visualizes the model\'s output, aiming to assist drivers in navigating safely by providing crucial environmental awareness. This showcases strong skills in machine learning model development, data processing, and application of AI for real-world problems.',
        image: 'https://placehold.co/600x400/E3F2FD/1976D2?text=Traffic+ML', // Placeholder image
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'Jupyter Notebook'], // Example technologies, adjust based on what you used
        liveLink: '#', // Not deployed
        githubLink: '#', // Not on GitHub
    },
];

export default projects; // Exports the array of project objects for use in other components
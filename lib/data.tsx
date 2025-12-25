import {
    Terminal,
    Cpu,
    Globe,
    Code,
    BookOpen,
    Award,
    Github,
    Linkedin,
    Mail,
    MessageCircle
} from 'lucide-react';

export const profileInfo = {
    name: "Tarekul Hasan",
    title: "Software Engineer & Machine Learning Enthusiast",
    university: "Stamford University Bangladesh",
    degree: "Bachelor of Science in Computer Science & Engineering",
    linkedin: "https://www.linkedin.com/public-profile/settings",
    github: "https://github.com/TarekTheProgrammer",
    emails: ["info.tarekul.cs@gmail.com", "tarakab012@gmail.com"],
    whatsapp: "01918633028",
    cgpa: "3.20",
    about: "I am a dedicated Computer Science graduate with a passion for building intelligent systems and scalable web applications. My journey at Stamford University Bangladesh has equipped me with strong problem-solving skills and a solid foundation in software engineering principles. I enjoy exploring new technologies, participating in tech communities, and working on impactful projects.",
    skills: [
        { name: "Python", category: "Languages", icon: Terminal },
        { name: "Machine Learning", category: "ML/AI", icon: Cpu },
        { name: "React.js", category: "Frontend", icon: Globe },
        { name: "JavaScript", category: "Languages", icon: Code },
        { name: "SQL", category: "Database", icon: BookOpen },
        { name: "Data Analysis", category: "ML/AI", icon: Award }
    ],
    certificates: [
        {
            title: "Python with Machine Learning",
            issuer: "Jagannath University",
            date: "Nov 2024 - Mar 2025",
            description: "Completed an 80-hour professional course under the Enhancing Digital Government and Economy (EDGE) Project of Bangladesh Computer Council, ICT Division."
        },
        {
            title: "Full Stack Web Development",
            issuer: "Local Technical Institute",
            date: "2022",
            description: "Hands-on experience with MERN stack and responsive UI design."
        }
    ],
    projects: [
        {
            title: "Predictive Analysis Model",
            description: "Developed an ML model using Python to predict market trends based on historical data.",
            tags: ["Python", "Scikit-Learn", "Pandas"],
            link: "https://github.com/TarekTheProgrammer"
        },
        {
            title: "University Management System",
            description: "A comprehensive portal for student enrollment and grade management.",
            tags: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/TarekTheProgrammer"
        }
    ],
    social: {
        github: { icon: Github, url: "https://github.com/TarekTheProgrammer" },
        linkedin: { icon: Linkedin, url: "https://www.linkedin.com/public-profile/settings" },
        email: { icon: Mail },
        whatsapp: { icon: MessageCircle }
    }
};

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' }
];

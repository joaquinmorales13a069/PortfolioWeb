import type { Profile, Resume, Project, Contact } from "../types/types";

// Profile data information
export const profileData: Profile = {
    name: "Joaquin Morales",
    title: "Full Stack Developer",
    description: "Passionate developer with 1 year of experience building modern web applications. Specialized in React, Node.js, and cloud technologies. I love creating elegant solutions to complex problems and continuously learning new technologies.",
    image: "/profile-image.png",
    email: "personal@joaquinmorales.dev",
    phone: "+61 421944166",
    location: "Sydney, Australia"
    
}

export const resumeData: Resume = {
    experience: [
        {
            id: 1,
            company: "SOS Medical SA",
            position: "Website Developer",
            duration: "Apr 2025 - Present",
            description: "Built responsive user interfaces and implemented state management solutions. Collaborated with design team to create seamless user experiences.",
            technologies: ["React", "Node.js", "Docker"]
        },
        {
            id: 2,
            company: "Torrens University",
            position: "Customer Service Assistant",
            duration: "May 2024 - Jun 2024",
            description: "Responded to tier 1 system navigation inquiries through phone and chat. Assisted students with questions related to the MyLearn platform, Microsoft Teams, subject outlines, and subject selection. Logged all student interactions in the student records management system.",
            technologies: ["Microsoft 365", "Propietary Student Record System"]
        },
        {
            id: 3,
            company: "FosterFBA",
            position: "Amazon PPC Specialist",
            duration: "Nov 2019 - Sep 2023",
            description: "Researched keywords and brand competitors for large-scale Amazon ad campaigns. Monitored daily trends, sales performance, keyword bids, and profit across 20 Amazon seller brands. Generated weekly insight reports using Amazon Seller Central tools.",
            technologies: ["Amazon Seller Central", "Google Workspace", "Helium 10", "Trello"]
        },
        {
            id: 4,
            company: "Responsive Answering Service",
            position: "Junior onsite programmer",
            duration: "Jan 2018 - Oct 2019",
            description: "Created and updated client information-taking scripts based on requirements received via email, phone, or online meetings. Generated phone answering reports and monthly message logs using Infinity Systems Software for quality assurance and billing. Built trust with clients’ customers to ensure accurate message delivery and callback details. Deescalated challenging calls to ensure proper escalation and information routing.",
            technologies: ["Infinity Software", "Microsoft Power BI", "Zoho CRM", "Google Workspace"]
        }
    ],
    education: [
        {
            id: 1,
            institution: "Torrens University",
            degree: "M.S. of Software Engineering (Cloud Computing Adv)",
            duration: "Sep 2023 - Present",
            description: "The Master of Software Engineering (Cloud Computing Advanced) is a 2 year specialized graduate program that combines advanced software engineering principles with comprehensive cloud computing technologies, covering distributed systems, containerization, microservices architecture, and cloud-native development practices."

        },
        {
            id: 2,
            institution: "International Scrum institute",
            degree: "Scrum Master Accredited Certification",
            duration: "Jan 2021 - Mar 2021",
            description: "Scrum Master Accredited Certification focused on agile project management methodologies, sprint planning, team facilitation, and delivering software products through iterative development processes."
        },
        {
            id: 3,
            institution: "Universidad Americana",
            degree: "B.S. in Information Systems Engineering",
            duration: "Jan 2015 - Feb 2021",
            description: "Bachelor's in Information Systems Engineering degree focused on systems design, database management, software development, and IT infrastructure with emphasis on integrating technology solutions for business operations."
        }
    ],
    skills: [
    { name: "React", level: 4, category: "frontend" },
    { name: "TypeScript", level: 3, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Python", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 3, category: "database" },
    { name: "MongoDB", level: 4, category: "database" },
    { name: "AWS", level: 4, category: "tools" },
    { name: "Docker", level: 2, category: "tools" },
    { name: "Git", level: 4, category: "tools" },
    { name: "Figma", level: 2, category: "other" }
  ]
}
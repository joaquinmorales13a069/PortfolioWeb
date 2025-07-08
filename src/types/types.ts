// Profile interface
export interface Profile {
    name: string;
    title: string;
    description: string;
    image: string;
    email: string;
    phone: string;
    location: string;
}
// Working experience interfance
export interface Experience {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
}
// Education interface
export interface Education {
    id: string;
    institution: string;
    degree: string;
    duration: string;
    description: string;
}
//  Skills interface
export interface Skills {
    name: string;
    level: number; // Goes from 1 to 5
    category: 'frotend' | 'backend' | 'database' | 'tools' | 'other'
}
// Resume interface
export interface Resume {
    experience: Experience[];
    education: Education[];
}
// Projects interface
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}
// Social media interface
export interface SocialLink{
    name: string;
    url: string;
    icon: string;
}
// Contact information interface
export interface Contact{
    email: string;
    phone: string;
    location: string;
    social: SocialLink[];
}
// Menu items
export type MenuItem = 'profile' | 'resume' | 'folio' | 'contact'
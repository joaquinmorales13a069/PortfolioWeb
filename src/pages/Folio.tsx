import { useState } from "react";
import { projectData, contactData } from "../data/portfolioData";
import FolioProjects from "../components/FolioProjects";

const Folio = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories: string[] = [
        "all",
        "frontend",
        "backend",
        "fullstack",
        "other",
    ];

    const technologyCategories: { [key: string]: string[] } = {
        frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vue", "Angular"],
        backend: ["Node.js", "Express", "Python", "Java", "C#", "PHP"],
        database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        tools: ["AWS", "Docker", "Git", "Jenkins"],
        other: ["Figma", "openProject", "Trello"]
    };

    const filteredProjects =
    selectedCategory === "all"
        ? projectData
        : projectData.filter((project) =>
              project.technologies.some((tech) =>
                  technologyCategories[selectedCategory]?.includes(tech)
              )
          );

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-600 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                        Portfolio
                    </h1>
                    <p className="text-xl text-white/80 animate-fade-in-delay">
                        Showcasing my latest projects
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex justify-center mb-12 animate-slide-up">
                    <div className="bg-white rounded-lg p-2 shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    selectedCategory === category
                                        ? "bg-yellow-500 text-white"
                                        : "text-gray-700 hover:bg-yellow-100"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <FolioProjects
                            key={index}
                            index={index}
                            id={project.id}
                            title={project.title}
                            liveLink={project.liveUrl || ""}
                            githubLink={project.githubUrl || ""}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        Project Statistics
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                {projectData.length}
                            </div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                15+
                            </div>
                            <div className="text-gray-600">
                                Technologies Used
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                100%
                            </div>
                            <div className="text-gray-600">
                                Client Satisfaction
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                24/7
                            </div>
                            <div className="text-gray-600">
                                Support Available
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center animate-slide-up-delay-4">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            I'm always excited to work on new and challenging
                            projects. Let's discuss how I can help you achieve
                            your goals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href={`mailto:${contactData.email}`}
                                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
                            >
                                Email Me
                            </a>
                            <a
                                href={`tel:${contactData.phone}`}
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
                            >
                                Call Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Folio;

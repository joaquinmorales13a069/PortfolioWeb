import React from "react";
import {
    FaBriefcase,
    FaGraduationCap,
    FaCode
} from "react-icons/fa";
import { resumeData } from "../data/portfolioData";
import { ResumeInfoCards } from "../components/ResumeInfoCards";

const Resume: React.FC = () => {
    const getSkillLevel = (level: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                    i < level ? "bg-yellow-500" : "bg-gray-300"
                }`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-600 p-8">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                        Resume
                    </h1>
                    <p className="text-xl text-white/80 animate-fade-in-delay">
                        My Professional Journey and Expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Experience section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up">
                            <div className="flex items-center space-x-4 mb-8">
                                <FaBriefcase className="text-3xl text-yellow-500" />
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Experience
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {resumeData.experience.map((exp, index) => (
                                    <ResumeInfoCards
                                        key={exp.id}
                                        index={index}
                                        info1={exp.id}
                                        info2={exp.position}
                                        info3={exp.company}
                                        info4={exp.duration}
                                        info5={exp.description}
                                        info6={exp.technologies}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up=delay-2">
                            <div className="flex items-center space-x-4 mb-8">
                                <FaGraduationCap className="text-3xl text-yellow-500" />
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Education
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {resumeData.education.map((edu, index) => (
                                    <ResumeInfoCards
                                        key={edu.id}
                                        index={index}
                                        info1={edu.id}
                                        info2={edu.degree}
                                        info3={edu.institution}
                                        info4={edu.duration}
                                        info5={edu.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg p-8 shadow-lg animte-slide-up-delay-3">
                            <div className="flex items-center space-x-4 mb-8">
                                <FaCode className="text-3xl text-yellow-500" />
                                <h2 className="text-3xl font-bold text-gray-800">
                                    Skills
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {[
                                    "fronted",
                                    "backend",
                                    "database",
                                    "tools",
                                    "other",
                                ].map((category) => {
                                    const categorySkills =
                                        resumeData.skills.filter(
                                            (skill) =>
                                                skill.category === category
                                        );
                                    if (categorySkills.length === 0) {
                                        return null;
                                    }

                                    return (
                                        <div
                                            key={category}
                                            className="animate-slide-up-delay-4"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                                                {category}
                                            </h3>
                                            <div className="space-y-4">
                                                {categorySkills.map((skill) => (
                                                    <div
                                                        key={skill.name}
                                                        className="space-y-2"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm font-medium text-gray-700">
                                                                {skill.name}
                                                            </span>
                                                            <div className="flex space-x-1">
                                                                {getSkillLevel(
                                                                    skill.level
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div
                                                                className="bg-yellow-500 h-2 rounded-full transition-all-1000"
                                                                style={{
                                                                    width: `${
                                                                        (skill.level /
                                                                            5) *
                                                                        100
                                                                    }%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Additional Information
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Languages
                                    </h4>
                                    <p className="text-gray-700">
                                        English (Fluent), Spanish (Native)
                                    </p>
                                </div>
                                
                                <div className="p-4 bg-yellow-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Interests
                                    </h4>
                                    <p className="text-gray-700">
                                        Open Source, AI/ML, Web3, Travel, Photography
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;

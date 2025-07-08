import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaDownload,
} from "react-icons/fa";
import { profileData } from "../data/portfolioData";

const Profile: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-yellow-600 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                        {profileData.name}
                    </h1>
                    <h2 className="text-2xl text-white/90 mb-8 animate-fade-in-delay">
                        {profileData.title}
                    </h2>
                    <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-2">
                        {profileData.description}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Image and Info */}
                    <div className="space-y-8">
                        {/* Profile Image */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up">
                            <div className="w-full max-w-sm mx-auto">
                                <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-3xl font-bold text-white">
                                                JD
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Profile Image
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <FaEnvelope className="text-yellow-500 text-xl" />
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Email
                                        </p>
                                        <p className="font-medium text-gray-800">
                                            {profileData.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <FaPhone className="text-yellow-500 text-xl" />
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Phone
                                        </p>
                                        <p className="font-medium text-gray-800">
                                            {profileData.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Location
                                        </p>
                                        <p className="font-medium text-gray-800">
                                            {profileData.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - About and Skills */}
                    <div className="space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-up-delay-2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                About Me
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    I'm a passionate Full Stack Developer with
                                    over 1 years of experience in building
                                    modern web applications. My journey in
                                    technology started with a curiosity about
                                    how things work, and it has
                                    evolved into a career of creating elegant
                                    solutions to complex problems.
                                </p>
                                <p>
                                    I specialize in React, Node.js, and cloud
                                    technologies, with a strong focus on
                                    creating scalable, maintainable code. I
                                    believe in writing clean, well-documented
                                    code and staying up-to-date with the latest
                                    industry trends and best practices.
                                </p>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <div className="animate-slide-up-delay-4">
                            <button className="w-full bg-white text-yellow-600 border-2 border-white hover:bg-yellow-600 hover:text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg">
                                <FaDownload className="text-xl" />
                                <span>Download CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

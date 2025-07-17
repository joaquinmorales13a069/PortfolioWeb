import React from "react";
import { FaUser, FaFileAlt, FaFolder, FaEnvelope } from "react-icons/fa";
import { profileData } from "../data/portfolioData";
import type { MenuItem } from "../types/types";

interface SidebarProps {
    activeSection: MenuItem;
    onSectionChange: (section: MenuItem) => void;
}

const menuItems = [
    { id: "profile" as MenuItem, label: "Profile", icon: FaUser },
    { id: "resume" as MenuItem, label: "Resume", icon: FaFileAlt },
    { id: "folio" as MenuItem, label: "Folio", icon: FaFolder },
    { id: "contact" as MenuItem, label: "Contact", icon: FaEnvelope },
];

const Sidebar: React.FC<SidebarProps> = ({
    activeSection,
    onSectionChange,
}) => {
    return (
        <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50">
            <div className="p-8">
                {/* Profile Header */}
                <div className="mb-12 text-center">
                    <div className="w-32 h-40 mx-auto mb-6 border-4 border-white shadow-lg overflow-hidden rounded-lg">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <FaUser className="text-4xl text-gray-500" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Joaquin Morales
                    </h1>
                    <p className="text-base text-gray-600">
                        Full Stack Developer
                    </p>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onSectionChange(item.id)}
                                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group ${
                                    isActive
                                        ? "bg-yellow-500 text-white shadow-md transform scale-115"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                }`}
                            >
                                <Icon
                                    className={`text-2xl transition-transform duration-300 ${
                                        isActive
                                            ? "transform scale-100"
                                            : "group-hover:scale-110"
                                    }`}
                                />
                                <span className="font-medium text-lg">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-yellow-500" />
                            <span>{profileData.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaUser className="text-yellow-500" />
                            <span>{profileData.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

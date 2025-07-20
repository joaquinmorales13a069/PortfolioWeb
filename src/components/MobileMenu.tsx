import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaFileAlt, FaFolder, FaEnvelope } from 'react-icons/fa';
import type { MenuItem } from '../types/types';
import { profileData } from '../data/portfolioData';
import sideMenuPhoto from '../assets/images/1749561599765.jpeg'

interface MobileMenuProps {
  activeSection: MenuItem;
  onSectionChange: (section: MenuItem) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'profile' as MenuItem, label: 'Profile', icon: FaUser },
    { id: 'resume' as MenuItem, label: 'Resume', icon: FaFileAlt },
    { id: 'folio' as MenuItem, label: 'Folio', icon: FaFolder },
    { id: 'contact' as MenuItem, label: 'Contact', icon: FaEnvelope },
  ];

  const handleMenuClick = (section: MenuItem) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
      >
        {isOpen ? <FaTimes className="text-xl text-gray-800" /> : <FaBars className="text-xl text-gray-800" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-24 mx-auto mb-4 border-4 border-white shadow-lg overflow-hidden rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <img src={sideMenuPhoto} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">Joaquin Morales</h1>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-yellow-500" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUser className="text-yellow-500" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu; 
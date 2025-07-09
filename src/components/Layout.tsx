import React, { useState } from "react";
import type { MenuItem } from "../types/types";
import Profile from "../pages/Profile";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";

const Layout: React.FC = () => {
    const [activeSection, setActiveSection] = useState<MenuItem>("profile");

    const renderContent = () => {
        switch (activeSection) {
            case "profile":
                return <Profile />;
            default:
                return <Profile />;
        }
    };
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
                <Sidebar
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                />
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />

            {/* Main Content */}
            <div className="flex-1 lg:ml-80 overflow-y-auto">
                <div className="min-h-full">{renderContent()}</div>
            </div>
        </div>
    );
};
export default Layout;

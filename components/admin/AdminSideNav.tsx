// AdminSideNav.tsx

'use client'
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons library

const AdminSideNav = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };




    return (
        <nav
            className={`bg-gray-800 text-white h-screen w-3/12 ${isSidebarOpen ? 'block' : 'hidden'
                } sm:block`}
        >
            <div className="p-4">
                {/* Sidebar Header */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">Sidebar</span>
                    <button onClick={toggleSidebar} className="text-white">
                        {isSidebarOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Sidebar Content */}
                <div>
                    {/* Add your sidebar content here */}
                    <ul>
                        <li className="py-2">Item 1</li>
                        <li className="py-2">Item 2</li>
                        {/* Add more items as needed */}
                    </ul>
                </div>

                {/* Sidebar Lines */}
                <div className="border-t border-gray-600 mt-4 pt-4">
                    {/* Add additional lines or content here */}
                </div>
            </div>
        </nav>
    );
};

export default AdminSideNav;

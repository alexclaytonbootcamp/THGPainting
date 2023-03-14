import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css';

const Sidebar = () => {
    return (
        <nav>
            <li><Link to="/all-projects">All Projects</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/all-clients">All Clients</Link></li>
            <li><Link to="/client">Client</Link></li>
        </nav>
    )
};

export default Sidebar;
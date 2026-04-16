import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>LumiStay</Link>
            <div>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginLeft: '1rem' }}>Home</Link>
                {/* More links can be added here */}
            </div>
        </nav>
    );
};

export default Navbar;

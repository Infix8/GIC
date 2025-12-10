import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = scrolled ? {
        background: 'rgba(10, 10, 18, 0.95)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    } : {
        background: 'rgba(10, 10, 18, 0.8)',
        boxShadow: 'none'
    };

    return (
        <nav className="navbar" style={navbarStyle}>
            <div className="logo-container">
                <img
                    src={logo}
                    alt="SMEC Global Innovators Conclave Logo"
                    className="logo"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>
            <div className="nav-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#themes" className="nav-link">Themes</a>
                <a href="#structure" className="nav-link">Structure</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;

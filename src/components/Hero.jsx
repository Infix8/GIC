import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-content">
                <div className="coming-soon-badge">
                    <span className="pulse-dot"></span>
                    <span>More details Shortly</span>
                </div>
                <h1 className="hero-title">
                    <span className="title-small">SMEC's</span>
                    <span className="title-main">Global Innovators</span>
                    <span className="title-highlight">CONCLAVE</span>
                    <span className="title-year">2026</span>
                </h1>
                <p className="hero-subtitle">
                    A focused, high-impact event bringing together
                    <span className="highlight-text"> startups</span>,
                    <span className="highlight-text"> deep-tech innovators</span>,
                    policymakers, industry leaders, investors, academia and students.
                </p>
                <div className="hero-cta">
                    <a href="#contact" className="cta-button primary">
                        <span>Get Notified</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#about" className="cta-button secondary">Learn More</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="flower-logo">
                    <div className="petal petal-1"></div>
                    <div className="petal petal-2"></div>
                    <div className="petal petal-3"></div>
                    <div className="petal petal-4"></div>
                    <div className="center-glow"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

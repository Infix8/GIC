import React from 'react';

const Structure = () => {
    return (
        <section className="section structure-section" id="structure">
            <div className="section-header">
                <h2 className="section-title">Event Structure</h2>
                <div className="title-underline"></div>
            </div>
            <div className="structure-timeline">
                <div className="timeline-item">
                    <div className="timeline-number">01</div>
                    <div className="timeline-content">
                        <h3>Knowledge Bubble</h3>
                        <p>
                            Policymakers and industry leaders discuss national strategies,
                            funding frameworks, R&D, and more
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content">
                        <h3>Idea2Impact</h3>
                        <p>
                            Student teams develop and present solutions with mentor guidance
                            to promote "Brighter Minds for Viksit Bharat"
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">03</div>
                    <div className="timeline-content">
                        <h3>Ignite Expo</h3>
                        <p>
                            Professional Startup Zone and Student Innovation Zone featuring
                            top 20 pre-summit teams
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content">
                        <h3>Innovators-Investors Boot Camp</h3>
                        <p>
                            Teams pitch to investment panel with 1:1 meetings. Potential
                            investment up to 10 Crore INR
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">05</div>
                    <div className="timeline-content">
                        <h3>Masterminds Congregation</h3>
                        <p>
                            Young entrepreneurs pitch their ideas to a panel of expert
                            mentors
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Structure;

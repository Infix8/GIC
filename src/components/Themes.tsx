import React from 'react';

const Themes = () => {
    return (
        <section className="section themes-section" id="themes">
            <div className="section-header">
                <h2 className="section-title">Key Themes</h2>
                <div className="title-underline"></div>
            </div>
            <div className="themes-content">
                <div className="theme-card main-theme">
                    <div className="theme-icon">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Startup Theme</h3>
                    <p className="font-semibold mb-3">Building, scaling, and commercializing startups from idea to global markets</p>
                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                        <div>• Startup Ideation & Entrepreneurial Mindset</div>
                        <div>• Go-to-Market Strategy & Product-Market Fit</div>
                        <div>• Scaling & Growth, Fundraising & Investments</div>
                        <div>• Commercialization, Operations, Legal & Compliance</div>
                        <div>• Branding, Sales, Customer Acquisition & Global Expansion</div>
                    </div>
                </div>
                <div className="theme-card main-theme">
                    <div className="theme-icon">⚡</div>
                    <h3 className="text-2xl font-bold mb-2">Deep Tech Theme</h3>
                    <p className="font-semibold mb-3">Advancing frontier technologies that shape national and global innovation</p>
                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                        <div>• Artificial Intelligence & Machine Learning</div>
                        <div>• Quantum Technologies & Robotics & Autonomous Systems</div>
                        <div>• Space & Defence Technologies</div>
                        <div>• Biotechnology & Life Sciences</div>
                        <div>• Clean Energy & Climate Technologies</div>
                        <div>• Semiconductors & Advanced Electronics</div>
                        <div>• Data Centers & Advanced Materials & Nano Technologies</div>
                    </div>
                </div>
            </div>
            <div className="tech-tags">
                <span className="tech-tag">Artificial Intelligence</span>
                <span className="tech-tag">Quantum Technologies</span>
                <span className="tech-tag">Robotics</span>
                <span className="tech-tag">Space & Defence</span>
                <span className="tech-tag">Biotechnology</span>
                <span className="tech-tag">Clean Energy</span>
                <span className="tech-tag">Semiconductors</span>
                <span className="tech-tag">Data Centers</span>
                <span className="tech-tag">Advanced Materials</span>
            </div>
        </section>
    );
};

export default Themes;

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
                        <h3><span style={{ color: 'var(--color-orange)' }}>K</span>nowledge <span style={{ color: 'var(--color-orange)' }}>B</span>ubble</h3>
                        <p className="mb-2">A premier two-day platform bringing together policymakers, government representatives, regulators, industry leaders, scientists, founders, CTOs, and CXOs.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>National Deep-Tech Strategy & IndiaAI Mission</li>
                            <li>R&D grants, tax incentives, public procurement for startups</li>
                            <li>Cutting-edge technologies: AI, Quantum, Robotics, Space Tech, Biotech</li>
                            <li>Semiconductors, Data Centers, and Advanced Materials</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>A</span>lpha 2 <span style={{ color: 'var(--color-orange)' }}>I</span>nfiniti</h3>
                        <p className="mb-2">A 30-hour intensive hiring hackathon with 360 selected students grouped into teams of 6 members.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Selection via LinkedIn, CV & GitHub profile review</li>
                            <li>Real-world problem statements from industry partners</li>
                            <li>60 mentors across 4 streams: Frontend, Backend, DevOps & Cloud, AI</li>
                            <li>Outcomes: PoCs, PPOs, and Internship Opportunities</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">03</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>B</span>usi<span style={{ color: 'var(--color-orange)' }}>T</span>ech <span style={{ color: 'var(--color-orange)' }}>E</span>xpo</h3>
                        <p className="mb-2">A multi-day showcase featuring 50 participants: 20 Professional Startups and 30 Student Projects.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Professional Expo: Market-ready products, MVPs, pilots, commercialized solutions</li>
                            <li>Student Expo: Prototypes, proof-of-concepts, research-based solutions</li>
                            <li>Evaluation: Business Potential & Validation (60%) + Customer Validation (40%)</li>
                            <li>Top performers advance to Investor Pitching Sessions</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>I</span>nno<span style={{ color: 'var(--color-orange)' }}>V</span>estors <span style={{ color: 'var(--color-orange)' }}>B</span>oot <span style={{ color: 'var(--color-orange)' }}>C</span>amp</h3>
                        <p className="mb-2">A comprehensive investor pitching platform with two tracks.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Student Track: 35 teams, pre-seed (5-min pitch + 5-min Q&A)</li>
                            <li>Professional Track: 28 teams, seed stage (5-min pitch + 10-min Q&A)</li>
                            <li>Online pitch submission & mentoring sessions for shortlisted teams</li>
                            <li>Investment Panel evaluations, round-table discussions, 1:1 meetings</li>
                            <li>Investment potential: Up to INR 10 Crores</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-number">05</div>
                    <div className="timeline-content">
                        <h3><span style={{ color: 'var(--color-orange)' }}>M</span>asterminds <span style={{ color: 'var(--color-orange)' }}>C</span>ongregation</h3>
                        <p className="mb-2">A multi-phase initiative for school students (8th-9th grade, teams of 3 members).</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Phase 1: Entrepreneurship Fundamentals workshop (Jan 20) - 1,200 students</li>
                            <li>Phase 2: Expert Training Sessions (Feb 2-4) - Pitching, business models, market validation</li>
                            <li>Phase 3: School-Based Screening (Feb 10-20)</li>
                            <li>Phase 4: Final Results Announcement (Feb 22)</li>
                            <li>Phase 5: Grand Finale (Feb 27-28) - Top 100 teams, Prize pool: ₹1,50,000</li>
                            <li>Multi-year strategic collaboration with participating schools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Structure;

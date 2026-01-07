import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-animate', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="page-container">
            <section className="section">
                {/* Header */}
                <div className="section-header-new about-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[ABOUT]</span>
                    <h1 className="section-title-new">ABOUT THE CONCLAVE</h1>
                </div>

                {/* Mission */}
                <div className="about-animate mb-16" style={{ maxWidth: '900px' }}>
                    <p className="mission-text">
                        SMEC's Global Innovators Conclave 2026 is a high-impact summit uniting founders, researchers, startups, government, corporates, investors, and academia to accelerate deep-tech innovation and entrepreneurship through exhibitions, pitch sessions, talks, and investor matchmaking.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="about-grid about-animate">
                    <div className="about-card-new">
                        <span className="card-number font-mono text-xs text-gray-400">[A]</span>
                        <h3 className="card-title">Organized By</h3>
                        <p className="card-highlight">St. Martin's Engineering College</p>
                        <p className="card-detail">UGC Autonomous Institution</p>
                        <p className="card-detail">NAAC A+ Accredited</p>
                    </div>

                    <div className="about-card-new">
                        <span className="card-number font-mono text-xs text-gray-400">[B]</span>
                        <h3 className="card-title">Recognition</h3>
                        <p className="card-highlight">ARIIA & NIRF Ranked</p>
                        <p className="card-detail">Top Institution for Innovation</p>
                        <p className="card-detail">Excellence in Entrepreneurship</p>
                    </div>

                    <div className="about-card-new">
                        <span className="card-number font-mono text-xs text-gray-400">[C]</span>
                        <h3 className="card-title">Mission</h3>
                        <p className="card-highlight">Build innovation and entrepreneurial mindset</p>
                        <p className="card-detail">Bring together students, startups, industry, government and mentors</p>
                        <p className="card-detail">Create solutions for India, with global relevance</p>
                    </div>
                    <div className="about-card-new">
                        <span className="card-number font-mono text-xs text-gray-400">[D]</span>
                        <h3 className="card-title">Vision</h3>
                        <p className="card-highlight">"Make campus innovation a launchpad"</p>
                        <p className="card-detail">Strengthen India's Deep-tech ecosystem</p>
                        <p className="card-detail">Scale ideas to the world</p>
                    </div>
                </div>

                {/* Objectives */}
                <div className="mt-24 about-animate">
                    <h2 className="section-title mb-8">Objectives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                        <div className="text-gray-700">● Foster Innovation and Entrepreneurship culture among students.</div>
                        <div className="text-gray-700">● Promote Deep-Tech and Problem-Driven Innovation for national priorities.</div>
                        <div className="text-gray-700">● Connect talent with incubators, accelerators, and global industry.</div>
                        <div className="text-gray-700">● Enable mentorship, market access and create curated investment opportunities.</div>
                        <div className="text-gray-700">● Contribute to India's innovation leadership with global impact.</div>
                        <div className="text-gray-700">● Strengthen the ecosystem by enabling collaborations between government, industry, research institutions and startups.</div>
                    </div>
                </div>

                {/* Key Pillars */}
                <div className="mt-24 about-animate">
                    <h2 className="section-title mb-8">Key Pillars</h2>
                    <div className="pillars-grid-new">
                        {[
                            { num: "01", title: "Showcase", desc: "Feature professional startups and student innovators with prototypes and live demos" },
                            { num: "02", title: "Invest", desc: "Create curated investment opportunities with potential funding up to INR 10 Crores" },
                            { num: "03", title: "Educate", desc: "Inform founders on policy, IP, regulations, and scaling deep-tech businesses" },
                            { num: "04", title: "Connect", desc: "Strengthen collaborations between government, industry, and startups" },
                        ].map((pillar, i) => (
                            <div key={i} className="pillar-card-new">
                                <span className="pillar-number">{pillar.num}</span>
                                <h3 className="pillar-title-text">{pillar.title}</h3>
                                <p className="pillar-desc">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Target Audience */}
                <div className="mt-24 about-animate">
                    <h2 className="section-title mb-8">Target Audience</h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Students, Researchers & PhD Scholars, Founders, Investors, Corporates, Government & Policy
                        Makers, Industry Leaders, Academia, Incubators, Accelerators.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

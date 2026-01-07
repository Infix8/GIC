import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const speakers = [
    { name: "Dr. Innovation Expert", role: "CEO, TechCorp", topic: "Future of AI" },
    { name: "Sarah Startup", role: "Founder, StartupHub", topic: "Scaling Deep Tech" },
    { name: "Prof. Research Lead", role: "IIT Director", topic: "Academia-Industry Bridge" },
    { name: "Venture Capitalist", role: "Partner, VC Fund", topic: "Investment Trends" },
    { name: "Policy Maker", role: "Govt. Advisor", topic: "Startup Ecosystem" },
    { name: "Industry Leader", role: "CTO, GlobalTech", topic: "Enterprise Innovation" },
];

const SpeakersPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.speaker-animate', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="page-container">
            <section className="section">
                <div className="section-header-new speaker-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[SPEAKERS]</span>
                    <h1 className="section-title-new">FEATURED SPEAKERS</h1>
                </div>

                <p className="speaker-animate text-gray-600 text-lg mb-12 max-w-2xl">
                    Learn from industry pioneers, successful entrepreneurs, and thought leaders 
                    shaping the future of innovation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {speakers.map((speaker, index) => (
                        <div 
                            key={index} 
                            className="speaker-animate speaker-card"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose/30 to-violet/30 mb-4 flex items-center justify-center text-2xl">
                                👤
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                            <p className="text-rose text-sm mt-1">{speaker.role}</p>
                            <p className="text-gray-600 text-sm mt-3 font-mono">[{speaker.topic}]</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center speaker-animate">
                    <p className="text-gray-600 text-sm font-mono">[MORE SPEAKERS TO BE ANNOUNCED]</p>
                </div>
            </section>
        </div>
    );
};

export default SpeakersPage;

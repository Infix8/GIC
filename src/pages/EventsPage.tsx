import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const events = [
    {
        title: "Knowledge Bubble",
        description: "Premier two-day platform bringing together policymakers, government representatives, industry leaders, scientists, founders, CTOs, and CXOs to discuss national strategies, regulatory trends, and funding support frameworks across AI, Quantum, Robotics, Space Tech, Biotech, Semiconductors, Data Centers, and Advanced Materials.",
        time: "Day 1 & 2 - Multiple Sessions",
        type: "panel"
    },
    {
        title: "Alpha 2 Infiniti - Hiring Hackathon",
        description: "30-hour intensive hackathon with 360 selected students forming teams of 6. Teams solve real-world problems from industry partners across 4 priority streams: Frontend, Backend, DevOps & Cloud, and AI. Outcomes include PoCs, PPOs, and Internship Opportunities.",
        time: "Day 1 - 9:30 AM to Day 2 - 4:00 PM",
        type: "competition"
    },
    {
        title: "BusiTech Expo",
        description: "Multi-day showcase featuring 20 Professional Startups and 30 Student Projects presenting MVPs and prototypes. Includes Professional Expo (market-ready products, MVPs, pilots) and Student Expo (prototypes, proof-of-concepts, research solutions). Top performers advance to Investor Pitching Sessions.",
        time: "Day 1 - 8:30 AM to Day 2 - 4:00 PM",
        type: "exhibition"
    },
    {
        title: "InnoVestors Boot Camp",
        description: "Comprehensive investor pitching platform with Student Track (35 teams, pre-seed, 5-min pitch + 5-min Q&A) and Professional Track (28 teams, seed stage, 5-min pitch + 10-min Q&A). Features curated round-table discussions, 1:1 Investor-Startup Meetings. Selected pitches can receive investment worth up to INR 10 Crores.",
        time: "Day 2 - 9:00 AM to 5:30 PM",
        type: "pitching"
    },
    {
        title: "Masterminds Congregation",
        description: "Multi-phase initiative for school students (8th-9th grade, teams of 3). Grand Finale features top 100 teams competing for prize pool of ₹1,50,000. Establishes multi-year strategic collaboration between SMEC and participating schools to foster entrepreneurial mindset.",
        time: "Day 2 - 10:00 AM",
        type: "competition"
    },
    {
        title: "Panel Discussions - Deep Tech Themes",
        description: "Comprehensive panel discussions covering AI & ML, Quantum Technologies, Robotics & Autonomous Systems, Space & Defence Technologies, Biotechnology & Life Sciences, Semiconductors & Advanced Electronics, Advanced Materials & Nanotechnology, and Climate & Sustainability.",
        time: "Day 1 & 2 - Multiple Time Slots",
        type: "panel"
    },
];

const EventsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.event-animate', {
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
                <div className="section-header-new event-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[EVENTS]</span>
                    <h1 className="section-title-new">EVENT HIGHLIGHTS</h1>
                </div>

                <p className="event-animate text-gray-600 text-lg mb-12 max-w-2xl">
                    SMEC's Global Innovators Conclave 2026 is a high-impact summit uniting founders, researchers, startups, government, corporates, investors, and academia to accelerate deep-tech innovation and entrepreneurship through exhibitions, pitch sessions, talks, and investor matchmaking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div 
                            key={index} 
                            className="event-animate event-card"
                        >
                            <span className="font-mono text-xs text-rose/80">{event.time}</span>
                            <h3 className="text-xl font-bold text-gray-900 mt-2">{event.title}</h3>
                            <p className="text-gray-600 mt-2">{event.description}</p>
                            <span className="inline-block mt-4 px-3 py-1 bg-rose/10 text-rose text-xs rounded-full uppercase tracking-wider">
                                {event.type}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;

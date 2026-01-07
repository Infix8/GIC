import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        number: "01",
        title: "Knowledge Bubble",
        description: "Premier two-day platform bringing together policymakers, government representatives, industry leaders, scientists, founders, CTOs, and CXOs to discuss national strategies and cutting-edge technologies."
    },
    {
        number: "02",
        title: "Alpha 2 Infiniti",
        description: "30-hour intensive hiring hackathon with 360 selected students forming teams of 6. Teams solve real-world problems with guidance from 60 mentors across 4 priority streams."
    },
    {
        number: "03",
        title: "BusiTech Expo",
        description: "Multi-day showcase featuring 50 participants: 20 Professional Startups and 30 Student Projects presenting MVPs and prototypes. Top performers advance to Investor Pitching Sessions."
    },
    {
        number: "04",
        title: "InnoVestors Boot Camp",
        description: "Comprehensive investor pitching platform with Student Track (35 teams) and Professional Track (28 teams). Selected pitches can receive investment worth up to INR 10 Crores."
    },
    {
        number: "05",
        title: "Masterminds Congregation",
        description: "Multi-phase initiative for school students (8th-9th grade, teams of 3). Grand Finale features top 100 teams competing for prize pool of ₹1,50,000."
    }
];

const Pillars = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.pillar-title', {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from('.pillar-card-new', {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.pillars-grid-new',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section pillars-section" id="pillars">
            {/* Section header */}
            <div className="section-header-new">
                <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[02]</span>
                <h2 className="pillar-title section-title-new">KEY PILLARS</h2>
            </div>

            {/* Pillars grid */}
            <div className="pillars-grid-new">
                {pillars.map((pillar, index) => (
                    <div key={index} className="pillar-card-new">
                        <span className="pillar-number font-mono text-6xl text-gray-200 font-bold">
                            {pillar.number}
                        </span>
                        <h3 className="pillar-title-text">{pillar.title}</h3>
                        <p className="pillar-desc">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pillars;

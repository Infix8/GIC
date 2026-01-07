import React, { useState, useEffect } from 'react';

interface Event {
    time: string;
    title: string;
    type: string;
    category: string;
    speaker: string;
    description: string;
}

interface Schedule {
    [key: number]: Event[];
}

const AgendaPage: React.FC = () => {
    const [activeDay, setActiveDay] = useState<number>(1);
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        window.scrollTo(0, 0);
    }, []);

    const filters = ['All', 'Main Stage', 'Innovation Zone', 'Competition', 'Pitching'];

    const schedule: Schedule = {
        1: [
            {
                time: "10:00 AM - 11:30 AM",
                title: "Inauguration, Opening Remarks & Key Note Sessions",
                type: "Main Stage",
                category: "Main Stage",
                speaker: "GIC Chair & Chief Guests",
                description: "Opening ceremony and welcome address. Keynote addresses by Chief Guests including Prof. Dr. K. Ravindra and other distinguished guests."
            },
            {
                time: "11:30 AM - 12:00 PM",
                title: "Tea Break & Expo Walk",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Refreshments and exhibition exploration."
            },
            {
                time: "12:00 PM - 1:00 PM",
                title: "Panel Discussion - Entrepreneurship & India Mission on Innovation",
                type: "Panel Discussion",
                category: "Main Stage",
                speaker: "Industry Leaders & Policymakers",
                description: "Panel discussion focusing on national innovation ecosystem, government support mechanisms, and startup success stories."
            },
            {
                time: "1:00 PM - 2:00 PM",
                title: "Panel Discussion - Policy Enablement & Vision 2047",
                type: "Panel Discussion",
                category: "Main Stage",
                speaker: "Policy Makers & Industry Leaders",
                description: "Discussion on policy frameworks, regulatory enablement, and long-term technology roadmap for India's Vision 2047."
            },
            {
                time: "2:00 PM - 3:00 PM",
                title: "Lunch Break & Exhibition Walk",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Lunch service and dedicated time for exhibition exploration."
            },
            {
                time: "3:00 PM - 4:00 PM",
                title: "Panel Discussion - Entrepreneurship & Growth",
                type: "Panel Discussion",
                category: "Main Stage",
                speaker: "Entrepreneurs & Investors",
                description: "Focus on scaling startups, investor relations, and market expansion strategies."
            },
            {
                time: "4:00 PM - 5:00 PM",
                title: "Panel Discussion - Data Centers & Infrastructure for Deep Technologies",
                type: "Panel Discussion",
                category: "Main Stage",
                speaker: "Infrastructure Experts & Tech Leaders",
                description: "Discussion on data center infrastructure, computational requirements, cloud ecosystems, and investment opportunities."
            },
            {
                time: "5:00 PM - 5:30 PM",
                title: "Coffee Break & Networking",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Refreshments and casual networking."
            },
            {
                time: "10:30 AM - 11:30 AM",
                title: "Opening Remarks & Key Note Sessions (Technology Track)",
                type: "Technology Track",
                category: "Innovation Zone",
                speaker: "Chief Guests & Guest of Honors",
                description: "Technology track opening with keynote addresses focusing on deep-tech innovations."
            },
            {
                time: "12:00 PM - 1:00 PM",
                title: "Panel Discussion - Artificial Intelligence & Machine Learning",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "AI/ML Experts & Researchers",
                description: "Topics include AI applications, LLMs, machine learning trends, industry implementation, and ethical AI."
            },
            {
                time: "1:00 PM - 2:00 PM",
                title: "Panel Discussion - Quantum Technologies",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Quantum Computing Experts",
                description: "Discussion on quantum computing, quantum communication, current capabilities, future roadmap, and investment opportunities."
            },
            {
                time: "3:00 PM - 4:00 PM",
                title: "Panel Discussion - Robotics & Autonomous Systems",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Robotics Experts",
                description: "Topics include robotics applications, autonomous vehicles, industrial automation, and healthcare robotics."
            },
            {
                time: "4:00 PM - 5:00 PM",
                title: "Panel Discussion - Biotechnology & Life Sciences",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Biotech Researchers & Industry Leaders",
                description: "Discussion on biotech innovation, genomics, therapeutics, healthcare solutions, and regulatory landscape."
            },
            {
                time: "08:30 AM - 11:00 AM",
                title: "BusiTech Expo - Stall Setup & Inauguration",
                type: "Exhibition",
                category: "Innovation Zone",
                speaker: "Startups & Student Innovators",
                description: "Participant setup and opening ceremony for the Business Tech Expo featuring 20 Professional Startups and 30 Student Projects."
            },
            {
                time: "11:00 AM - 15:00 PM",
                title: "BusiTech Expo - Live Exhibition",
                type: "Exhibition",
                category: "Innovation Zone",
                speaker: "Exhibitors",
                description: "Live expo with visitor interaction showcasing MVPs, prototypes, and commercialized solutions."
            },
            {
                time: "09:30 AM - 10:00 AM",
                title: "Alpha 2 Infiniti - Inauguration",
                type: "Competition",
                category: "Competition",
                speaker: "Hackathon Participants",
                description: "Opening ceremony and welcome address for the 30-hour hiring hackathon."
            },
            {
                time: "10:00 AM - 10:30 AM",
                title: "Alpha 2 Infiniti - Problem Statement Announcement",
                type: "Competition",
                category: "Competition",
                speaker: "Mentors & Teams",
                description: "Teams receive their assigned problem statements from industry partners."
            },
            {
                time: "11:00 AM - 18:00 PM",
                title: "Alpha 2 Infiniti - Sprint 1 (7 hours)",
                type: "Competition",
                category: "Competition",
                speaker: "Hackathon Teams",
                description: "Problem-solving phase with mandatory milestone delivery including solution documentation, system architecture design, and mock dashboard."
            }
        ],
        2: [
            {
                time: "10:30 AM - 11:30 AM",
                title: "Opening Remarks & Key Note Sessions (Day 2 Technology Track)",
                type: "Technology Track",
                category: "Innovation Zone",
                speaker: "Chief Guests & Guest of Honors",
                description: "Day 2 technology track opening with keynote addresses."
            },
            {
                time: "11:30 AM - 12:00 PM",
                title: "Tea Break & Expo Walk",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Refreshments and exhibition exploration."
            },
            {
                time: "12:00 PM - 1:00 PM",
                title: "Panel Discussion - Space & Defence Technologies",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Space & Defence Experts",
                description: "Topics include space exploration, satellite technology, defence innovation, national security, and strategic initiatives."
            },
            {
                time: "1:00 PM - 2:00 PM",
                title: "Panel Discussion - Semiconductors & Advanced Electronics",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Semiconductor Industry Leaders",
                description: "Discussion on semiconductor manufacturing, chip design, supply chain resilience, government incentives, and Make in India initiatives."
            },
            {
                time: "2:00 PM - 3:00 PM",
                title: "Lunch Break & Exhibition Walk",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Lunch service and continued networking."
            },
            {
                time: "3:00 PM - 4:00 PM",
                title: "Panel Discussion - Advanced Materials & Nanotechnology",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Materials Science Experts",
                description: "Topics include advanced materials research, nanotechnology applications, sustainable materials, and industrial implementation."
            },
            {
                time: "4:00 PM - 5:00 PM",
                title: "Panel Discussion - Climate & Sustainability",
                type: "Panel Discussion",
                category: "Innovation Zone",
                speaker: "Climate Tech Innovators",
                description: "Discussion on climate tech innovation, sustainability solutions, renewable energy, environmental impact, and green startups."
            },
            {
                time: "5:00 PM - 5:30 PM",
                title: "Coffee Break & Networking",
                type: "Break",
                category: "All",
                speaker: "",
                description: "Refreshments and evening networking."
            },
            {
                time: "09:30 AM - 11:00 AM",
                title: "BusiTech Expo - Expert Evaluation",
                type: "Exhibition",
                category: "Innovation Zone",
                speaker: "Evaluation Panel",
                description: "Panel evaluation of all exhibits based on Business Potential & Validation (60%) and Customer Validation (40%)."
            },
            {
                time: "11:00 AM - 16:00 PM",
                title: "BusiTech Expo - Investor Pitch (Selected Teams)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Top-Ranked Startups",
                description: "Top-ranked startups from the expo present to investor panels for potential funding and partnerships."
            },
            {
                time: "16:00 PM",
                title: "BusiTech Expo - Prize Distribution",
                type: "Ceremony",
                category: "Main Stage",
                speaker: "",
                description: "Awards ceremony recognizing outstanding innovations and achievements."
            },
            {
                time: "09:00 AM - 10:00 AM",
                title: "InnoVestors Boot Camp - Inauguration (Student Track)",
                type: "Pitching",
                category: "Pitching",
                speaker: "All Students",
                description: "Opening ceremony for student track (pre-seed stage) with 35 teams."
            },
            {
                time: "13:00 PM - 16:00 PM",
                title: "InnoVestors Boot Camp - Student Track Pitching (15 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Student Startups",
                description: "Student startups pitch to investors (5-min pitch + 5-min Q&A per team)."
            },
            {
                time: "09:00 AM - 10:00 AM",
                title: "InnoVestors Boot Camp - Inauguration (Professional Track)",
                type: "Pitching",
                category: "Pitching",
                speaker: "All Professionals",
                description: "Opening ceremony for professional track (seed stage) with 28 teams."
            },
            {
                time: "13:00 PM - 17:00 PM",
                title: "InnoVestors Boot Camp - Professional Track Pitching (14 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Professional Founders",
                description: "Professional startups pitch to investors (5-min pitch + 10-min Q&A per team)."
            },
            {
                time: "10:00 AM - 12:00 PM",
                title: "InnoVestors Boot Camp - Student Track Pitching (10 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Student Startups",
                description: "Continued student track pitching sessions."
            },
            {
                time: "13:30 PM - 15:30 PM",
                title: "InnoVestors Boot Camp - Student Track Pitching (10 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Student Startups",
                description: "Final student track pitching sessions."
            },
            {
                time: "10:00 AM - 12:00 PM",
                title: "InnoVestors Boot Camp - Professional Track Pitching (7 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Professional Founders",
                description: "Continued professional track pitching sessions."
            },
            {
                time: "13:30 PM - 15:30 PM",
                title: "InnoVestors Boot Camp - Professional Track Pitching (7 pitches)",
                type: "Pitching",
                category: "Pitching",
                speaker: "Professional Founders",
                description: "Final professional track pitching sessions."
            },
            {
                time: "10:00 AM",
                title: "Masterminds Congregation - Grand Finale",
                type: "Competition",
                category: "Competition",
                speaker: "Top 100 School Teams",
                description: "Top 100 teams from all schools compete in the grand finale. Prize pool: ₹1,50,000. Teams of 3 members from 8th-9th grade pitch their ideas to a panel of 3 judges."
            },
            {
                time: "01:00 AM - 10:00 AM",
                title: "Alpha 2 Infiniti - Sprint 3 (10 hours)",
                type: "Competition",
                category: "Competition",
                speaker: "Hackathon Teams",
                description: "Final development phase and polish for hackathon solutions."
            },
            {
                time: "10:00 AM - 12:00 PM",
                title: "Alpha 2 Infiniti - Mentor Final Checking & Elimination",
                type: "Competition",
                category: "Competition",
                speaker: "Mentors & Top 10 Teams",
                description: "Final evaluation; only top 10 teams advance to Round 2."
            },
            {
                time: "13:00 PM - 15:00 PM",
                title: "Alpha 2 Infiniti - Presentations (Top 10 Teams)",
                type: "Competition",
                category: "Competition",
                speaker: "Qualifying Teams",
                description: "Final presentations from top 10 qualifying teams."
            },
            {
                time: "16:00 PM",
                title: "Alpha 2 Infiniti - Prize Distribution",
                type: "Ceremony",
                category: "Main Stage",
                speaker: "",
                description: "Awards ceremony for winning hackathon teams. Recognition of PoCs, PPOs, and Internship Opportunities."
            }
        ]
    };

    const filteredEvents = schedule[activeDay].filter(item =>
        activeFilter === 'All' || item.category.trim() === activeFilter.trim() || item.category === 'All'
    );

    return (
        <div className={`min-h-screen pt-24 pb-16 px-4 md:px-12 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-in">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
                        Event <span className="text-gold">Agenda</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our comprehensive schedule of keynotes, pitch sessions, and networking opportunities designed to ignite innovation.
                    </p>
                </div>

                {/* Controls Container */}
                <div className="bg-[#F5F5F5] border border-gray-200 rounded-3xl p-6 mb-12 animate-in" style={{ animationDelay: '200ms' }}>

                    {/* Day Tabs */}
                    <div className="flex justify-center gap-6 mb-8 flex-wrap">
                        {[1, 2].map((day) => (
                            <button
                                key={day}
                                className={`relative group px-8 py-4 rounded-xl transition-all duration-300 w-full md:w-auto ${activeDay === day ? 'bg-[#6B5B95] text-white border-[#6B5B95]' : 'bg-white border-gray-300 hover:border-[#6B5B95] hover:bg-[#F5F5F5]'}`}
                                onClick={() => setActiveDay(day)}
                                style={{ borderWidth: '1px' }}
                            >
                                <span className="block text-sm uppercase tracking-widest mb-1" style={{ color: activeDay === day ? 'rgba(255,255,255,0.8)' : '#666' }}>Day {day}</span>
                                <span className={`block text-xl md:text-2xl font-bold ${activeDay === day ? 'text-white' : 'text-gray-900'}`}>
                                    {day === 1 ? 'Fri, Feb 27' : 'Sat, Feb 28'}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center gap-3 flex-wrap">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter
                                    ? 'bg-[#6B5B95] text-white border-[#6B5B95] shadow-[0_0_15px_rgba(107,91,149,0.3)] scale-105'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-[#6B5B95] hover:text-[#6B5B95]'
                                    }`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline & Cards */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#6B5B95]/30 to-transparent hidden md:block"></div>

                    <div className="flex flex-col gap-8 md:gap-12">
                        {filteredEvents.map((item, index) => (
                            <div
                                key={`${item.title}-${item.time}`}
                                className={`flex flex-col md:flex-row gap-6 items-start md:items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Event Card */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className={`w-full max-w-xl bg-white p-6 md:p-8 rounded-2xl border border-gray-200 relative overflow-hidden group-hover:border-[#6B5B95] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] animate-fade-up`}>
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <i className="text-6xl md:text-8xl" style={{ color: '#6B5B95' }}>★</i>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full" style={{ backgroundColor: '#6B5B95' }}>
                                                {item.time}
                                            </span>
                                            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-700 bg-gray-100 rounded-full border border-gray-200">
                                                {item.type}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-[#6B5B95] transition-colors">
                                            {item.title}
                                        </h3>

                                        {item.speaker && (
                                            <div className="flex items-center gap-2 mb-4" style={{ color: '#6B5B95' }}>
                                                <span className="text-lg">🎤</span>
                                                <span className="font-medium">{item.speaker}</span>
                                            </div>
                                        )}

                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-[14px] md:left-1/2 w-3 h-3 rounded-full border-4 z-10 hidden md:block" style={{ transform: 'translateX(-50%)', backgroundColor: '#6B5B95', borderColor: '#EAEAEA', boxShadow: '0 0 0 4px rgba(107,91,149,0.3)' }}></div>

                                {/* Empty Space for Timeline Balance */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20 animate-pulse">
                            <p className="text-xl text-gray-600">No events found for this filter.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AgendaPage;

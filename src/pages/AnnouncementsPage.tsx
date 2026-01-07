import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Announcement {
    id: number;
    title: string;
    date: string;
    category: string;
    content: string;
    important?: boolean;
}

const announcements: Announcement[] = [
    {
        id: 1,
        title: "Registration Now Open",
        date: "January 15, 2026",
        category: "Registration",
        content: "Early bird registration for SMEC's Global Innovators Conclave 2026 is now open. Register before February 1st to avail special discounts and secure your spot at this premier innovation summit.",
        important: true
    },
    {
        id: 2,
        title: "Call for Speakers Extended",
        date: "January 20, 2026",
        category: "Speakers",
        content: "The deadline for speaker submissions has been extended to January 30, 2026. We're looking for industry leaders, innovators, and thought leaders to share their insights on deep-tech innovation and entrepreneurship.",
        important: false
    },
    {
        id: 3,
        title: "Sponsorship Opportunities Available",
        date: "January 22, 2026",
        category: "Sponsors",
        content: "Partner with us to showcase your brand at India's premier innovation conclave. Multiple sponsorship tiers available with exclusive benefits including logo placement, speaking opportunities, and networking access.",
        important: false
    },
    {
        id: 4,
        title: "Student Hackathon Registration Opens",
        date: "January 25, 2026",
        category: "Events",
        content: "Alpha 2 Infiniti - 30-hour intensive hiring hackathon registration is now open. Limited to 360 selected students forming teams of 6. Register early to secure your participation.",
        important: true
    },
    {
        id: 5,
        title: "BusiTech Expo Applications Open",
        date: "January 28, 2026",
        category: "Events",
        content: "Applications for BusiTech Expo are now being accepted. Showcase your startup or student project. Top performers will advance to Investor Pitching Sessions. Apply before February 10th.",
        important: false
    },
    {
        id: 6,
        title: "InnoVestors Boot Camp - Investment Opportunities",
        date: "February 1, 2026",
        category: "Events",
        content: "InnoVestors Boot Camp offers comprehensive investor pitching platform. Selected pitches can receive investment worth up to INR 10 Crores. Both Student Track (35 teams) and Professional Track (28 teams) available.",
        important: true
    }
];

const AnnouncementsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.announcement-animate', {
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
                <div className="section-header-new announcement-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[ANNOUNCEMENTS]</span>
                    <h1 className="section-title-new">ANNOUNCEMENTS</h1>
                </div>

                <p className="announcement-animate text-gray-600 text-lg mb-12 max-w-2xl">
                    Stay updated with the latest news, updates, and important information about SMEC's Global Innovators Conclave 2026.
                </p>

                <div className="space-y-6">
                    {announcements.map((announcement, index) => (
                        <div
                            key={announcement.id}
                            className={`announcement-animate bg-white border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg ${
                                announcement.important 
                                    ? 'border-[#6B5B95] border-2' 
                                    : 'border-gray-200'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {announcement.important && (
                                            <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-white rounded" style={{ backgroundColor: '#6B5B95' }}>
                                                Important
                                            </span>
                                        )}
                                        <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-700 bg-gray-100 rounded-full">
                                            {announcement.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                        {announcement.title}
                                    </h3>
                                </div>
                                <span className="text-sm text-gray-500 font-mono">
                                    {announcement.date}
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {announcement.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Empty state message if no announcements */}
                {announcements.length === 0 && (
                    <div className="announcement-animate text-center py-16">
                        <p className="text-gray-500 text-lg">No announcements at this time.</p>
                        <p className="text-gray-400 text-sm mt-2">Check back soon for updates!</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default AnnouncementsPage;


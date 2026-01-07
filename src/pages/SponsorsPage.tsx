import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const sponsorTiers = [
    {
        tier: "Platinum",
        benefits: ["Main Stage Branding", "VIP Access", "10 Passes", "Premium Booth"],
        price: "₹50,00,000",
        featured: true
    },
    {
        tier: "Gold",
        benefits: ["Stage Mention", "Priority Access", "5 Passes", "Standard Booth"],
        price: "₹25,00,000",
        featured: false
    },
    {
        tier: "Silver",
        benefits: ["Logo Display", "Event Access", "3 Passes", "Shared Space"],
        price: "₹10,00,000",
        featured: false
    },
];

const SponsorsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.sponsor-animate', {
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
                <div className="section-header-new sponsor-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[SPONSORS]</span>
                    <h1 className="section-title-new">PARTNER WITH US</h1>
                </div>

                <p className="sponsor-animate text-gray-600 text-lg mb-12 max-w-2xl">
                    Join India's premier innovation summit as a sponsor and connect with 
                    10,000+ visitors, 1000+ startups, and top investors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sponsorTiers.map((tier, index) => (
                        <div 
                            key={index} 
                            className={`sponsor-animate sponsor-card ${tier.featured ? 'featured' : ''}`}
                        >
                            {tier.featured && (
                                <span className="absolute top-0 right-0 bg-rose text-white text-xs px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">{tier.tier}</h3>
                            <p className="text-3xl font-bold text-rose mt-4">{tier.price}</p>
                            <ul className="mt-6 space-y-3">
                                {tier.benefits.map((benefit, i) => (
                                    <li key={i} className="text-gray-700 flex items-center gap-2">
                                        <span className="text-rose">✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-8 w-full py-3 bg-white/5 hover:bg-rose/20 border border-gray-300 rounded-lg text-gray-900 transition-all">
                                Contact Us
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center sponsor-animate">
                    <p className="text-gray-600 mb-4">For custom sponsorship packages, contact:</p>
                    <a href="mailto:sponsors@smec.edu.in" className="text-rose hover:underline">
                        sponsors@smec.edu.in
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SponsorsPage;

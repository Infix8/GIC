import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const hotels = [
    {
        name: "Hotel Grand Hyderabad",
        distance: "2 km from venue",
        price: "₹8,000/night",
        rating: "5 Star",
        amenities: ["WiFi", "Pool", "Gym", "Spa"]
    },
    {
        name: "ITC Kohenur",
        distance: "3 km from venue",
        price: "₹7,500/night",
        rating: "5 Star",
        amenities: ["WiFi", "Restaurant", "Gym"]
    },
    {
        name: "Novotel Hyderabad",
        distance: "4 km from venue",
        price: "₹5,000/night",
        rating: "4 Star",
        amenities: ["WiFi", "Pool", "Restaurant"]
    },
    {
        name: "Budget Inn",
        distance: "5 km from venue",
        price: "₹2,500/night",
        rating: "3 Star",
        amenities: ["WiFi", "Breakfast"]
    },
];

const AccommodationPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.acc-animate', {
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
                <div className="section-header-new acc-animate">
                    <span className="section-number font-mono text-xs text-gray-500 tracking-widest">[STAY]</span>
                    <h1 className="section-title-new">ACCOMMODATION</h1>
                </div>

                <p className="acc-animate text-gray-600 text-lg mb-12 max-w-2xl">
                    Partner hotels offering special rates for Conclave attendees. 
                    Book early for the best availability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="acc-animate hotel-card">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                                    <p className="text-gray-600 text-sm">{hotel.distance}</p>
                                </div>
                                <span className="bg-rose/20 text-rose text-xs px-2 py-1 rounded">
                                    {hotel.rating}
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-rose mb-4">{hotel.price}</p>
                            <div className="flex flex-wrap gap-2">
                                {hotel.amenities.map((amenity, i) => (
                                    <span key={i} className="text-xs bg-white/5 text-gray-700 px-2 py-1 rounded">
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                            <button className="mt-6 w-full py-2 bg-white/5 hover:bg-white/10 border border-gray-300 rounded-lg text-gray-900 text-sm transition-all">
                                Book Now →
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 acc-animate">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Travel Information to St. Martin's Engineering College</h3>
                    <p className="text-gray-600 text-sm mb-6">(Dhulapally, Bahadurpally, Medchal-Malkajgiri District)</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-gray-300 rounded-xl p-6">
                            <h4 className="text-rose font-medium mb-2">By Air</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Rajiv Gandhi International Airport (HYD) – 50-60 km from college. Taxi/cab services available (journey time: 1.5-2 hours).
                            </p>
                        </div>
                        <div className="bg-white/5 border border-gray-300 rounded-xl p-6">
                            <h4 className="text-rose font-medium mb-2">By Train</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Secunderabad Railway Station – 16-17 km from college. Metro connectivity available to nearest stations; combine with bus/taxi for final leg.
                                <br /><br />
                                Hyderabad Railway Station (Nampally) – Accessible via city transportation.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-gray-300 rounded-xl p-6">
                            <h4 className="text-rose font-medium mb-2">By Bus</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                TSRTC buses: Routes 229 (Secunderabad to Medchal), 227 (Bahadurpally X Road), 24S/273, and 227B serve the area.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccommodationPage;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundEffects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Subtle animation for the grid
            gsap.to('.bg-grid-line', {
                opacity: 0.08,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: 0.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="background-effects">
            {/* Clean light background */}
            <div 
                className="absolute inset-0"
                style={{
                    background: '#EAEAEA'
                }}
            />

            {/* Subtle grid pattern */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
                <defs>
                    <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path 
                            d="M 100 0 L 0 0 0 100" 
                            fill="none" 
                            stroke="#070707" 
                            strokeWidth="0.5"
                            className="bg-grid-line"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Minimal corner accents - technical aesthetic */}
            <div className="absolute bottom-8 left-8 text-black/20 font-mono text-xs tracking-wider hidden md:block">
                FEB.27-28
            </div>
            <div className="absolute bottom-8 right-8 text-black/20 font-mono text-xs tracking-wider hidden md:block">
                HYDERABAD
            </div>
        </div>
    );
};

export default BackgroundEffects;

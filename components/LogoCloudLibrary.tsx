import React from 'react';

export const LOGO_CLOUD_OPTIONS = [
    { id: 'simple', name: 'Simple Row', description: 'Clean row of logos' },
    { id: 'grid', name: 'Grid Layout', description: 'Grid of partner logos' },
    { id: 'ticker', name: 'Infinite Ticker', description: 'Animated scrolling logos' }
];

interface LogoCloudProps {
    data?: any;
    primaryColor?: string;
}

const LOGOS = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
];

const SimpleLogoCloud: React.FC<LogoCloudProps> = () => (
    <section className="py-16 px-6 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {LOGOS.map((logo, i) => (
                <img key={i} src={logo} className="h-8 md:h-10 object-contain" alt="Logo" />
            ))}
        </div>
    </section>
);

const GridLogoCloud: React.FC<LogoCloudProps> = () => (
    <section className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-12">Trusted by industry leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
                {LOGOS.map((logo, i) => (
                    <div key={i} className="flex justify-center">
                        <img src={logo} className="h-8 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" alt="Logo" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TickerLogoCloud: React.FC<LogoCloudProps> = () => (
    <section className="py-12 bg-white overflow-hidden border-b border-neutral-100">
        <div className="flex gap-24 animate-scroll whitespace-nowrap">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                <img key={i} src={logo} className="h-8 object-contain opacity-40 grayscale" alt="Logo" />
            ))}
        </div>
        <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-scroll {
            animation: scroll 30s linear infinite;
        }
    `}</style>
    </section>
);

export const LOGO_CLOUD_COMPONENTS: Record<string, React.FC<LogoCloudProps>> = {
    'simple': SimpleLogoCloud,
    'grid': GridLogoCloud,
    'ticker': TickerLogoCloud
};

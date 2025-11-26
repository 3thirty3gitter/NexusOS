import React from 'react';
import {
    ArrowRight,
    Star,
    Zap,
    Shield,
    Truck,
    Box,
    Smartphone,
    Globe,
    Cpu,
    Layers,
    Activity,
    Quote
} from 'lucide-react';

// --- TYPES ---

export interface SectionProps {
    id?: string;
    data: any;
    variant?: string;
    isEditable?: boolean;
    onUpdate?: (data: any) => void;
}

// --- FEATURES SECTIONS ---

export const FeaturesBento: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-black tracking-tight mb-4">{data?.heading || "Next-Gen Capabilities"}</h2>
                <p className="text-lg text-neutral-500">{data?.subheading || "Engineered for the demands of the modern workflow."}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative group">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Zap size={24} /></div>
                        <h3 className="text-2xl font-bold mb-2">Instant Processing</h3>
                        <p className="text-neutral-500 max-w-md">Zero-latency architecture ensures your actions are executed the moment you think them.</p>
                    </div>
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="bg-black text-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-neutral-800 text-white rounded-2xl flex items-center justify-center mb-6"><Shield size={24} /></div>
                        <h3 className="text-xl font-bold mb-2">Military Grade</h3>
                        <p className="text-neutral-400 text-sm">Encrypted at rest and in transit.</p>
                    </div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Cpu size={24} /></div>
                        <h3 className="text-xl font-bold mb-2">AI Native</h3>
                        <p className="text-neutral-500 text-sm">Built with large language models at the core.</p>
                    </div>
                </div>
                <div className="md:col-span-2 bg-neutral-900 text-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-neutral-800 text-green-400 rounded-2xl flex items-center justify-center mb-6"><Globe size={24} /></div>
                            <h3 className="text-2xl font-bold mb-2">Global Edge Network</h3>
                            <p className="text-neutral-400">Deployed to 350+ cities worldwide for sub-50ms access from anywhere.</p>
                        </div>
                        <div className="w-full md:w-1/3 h-32 md:h-full bg-neutral-800 rounded-xl border border-neutral-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,147,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const FeaturesGrid: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{data?.heading || "Everything you need."}</h2>
                <p className="text-xl text-neutral-500">{data?.subheading || "A complete toolkit for the modern creator."}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                    { icon: Layers, title: "Modular Design", desc: "Swap components instantly." },
                    { icon: Activity, title: "Real-time Analytics", desc: "Track performance live." },
                    { icon: Smartphone, title: "Mobile First", desc: "Perfect on every device." },
                    { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed." }
                ].map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <feature.icon size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                        <p className="text-neutral-500 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- CTA SECTIONS ---

export const CTAGlitch: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-24 px-6 bg-black overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#222_1px,#222_2px)]"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 mix-blend-difference">
                {data?.heading || "JOIN THE REVOLUTION"}
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-mono">
                {data?.subheading || "The future is not distributed evenly. Claim your stake today."}
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-white font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-blue-600 hover:text-white">
                <span>{data?.buttonText || "INITIATE LAUNCH"}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></div>
            </button>
        </div>
    </section>
);

export const CTAMinimal: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-32 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-neutral-900">
                {data?.heading || "Ready to get started?"}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition-colors">
                    {data?.buttonText || "Get Started Now"}
                </button>
                <button className="px-8 py-4 bg-white text-black border border-neutral-200 rounded-full font-bold hover:bg-neutral-50 transition-colors">
                    View Documentation
                </button>
            </div>
        </div>
    </section>
);

// --- TESTIMONIALS ---

export const TestimonialMarquee: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-24 bg-neutral-950 overflow-hidden">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">{data?.heading || "Trusted by the best."}</h2>
        </div>
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-[400px] bg-neutral-900 p-8 rounded-2xl border border-neutral-800 inline-block whitespace-normal">
                        <div className="flex gap-1 text-yellow-500 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                        <p className="text-neutral-300 text-lg mb-6">"This platform completely changed how we operate. The speed and flexibility are unmatched in the industry."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
                            <div>
                                <div className="text-white font-bold text-sm">Alex Chen</div>
                                <div className="text-neutral-500 text-xs">CTO, TechFlow</div>
                            </div>
                        </div>
                    </div>
                ))}
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={`clone-${i}`} className="w-[400px] bg-neutral-900 p-8 rounded-2xl border border-neutral-800 inline-block whitespace-normal">
                        <div className="flex gap-1 text-yellow-500 mb-4"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                        <p className="text-neutral-300 text-lg mb-6">"This platform completely changed how we operate. The speed and flexibility are unmatched in the industry."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
                            <div>
                                <div className="text-white font-bold text-sm">Alex Chen</div>
                                <div className="text-neutral-500 text-xs">CTO, TechFlow</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- LOGO CLOUD ---

export const LogoCloud: React.FC<SectionProps> = ({ id, data }) => (
    <section id={id} className="py-16 px-6 border-b border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">{data?.heading || "Powering next-gen companies"}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['Acme', 'Globex', 'Soylent', 'Initech', 'Umbrella'].map(name => (
                    <div key={name} className="text-2xl font-black text-neutral-900">{name}</div>
                ))}
            </div>
        </div>
    </section>
);

// --- LIBRARY DEFINITIONS ---

export const SECTION_CATEGORIES = [
    { id: 'features', name: 'Features', icon: Zap, description: 'Showcase product capabilities' },
    { id: 'cta', name: 'Call to Action', icon: ArrowRight, description: 'Drive user conversion' },
    { id: 'testimonials', name: 'Testimonials', icon: Quote, description: 'Social proof and reviews' },
    { id: 'logos', name: 'Logo Cloud', icon: Globe, description: 'Trusted by logos' }
];

export const SECTION_OPTIONS: Record<string, any[]> = {
    features: [
        { id: 'bento', name: 'Bento Grid', description: 'Modern asymmetrical grid', component: FeaturesBento },
        { id: 'grid', name: 'Icon Grid', description: 'Classic 4-column layout', component: FeaturesGrid }
    ],
    cta: [
        { id: 'glitch', name: 'Cyber Glitch', description: 'High impact dark mode', component: CTAGlitch },
        { id: 'minimal', name: 'Clean Minimal', description: 'Simple centered text', component: CTAMinimal }
    ],
    testimonials: [
        { id: 'marquee', name: 'Infinite Marquee', description: 'Scrolling review stream', component: TestimonialMarquee }
    ],
    logos: [
        { id: 'simple', name: 'Simple Cloud', description: 'Row of logos', component: LogoCloud }
    ]
};

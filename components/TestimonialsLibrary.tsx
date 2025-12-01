import React from 'react';
import { Quote, Star } from 'lucide-react';

export const TESTIMONIAL_OPTIONS = [
    { id: 'minimal', name: 'Minimal Quote', description: 'Clean typography focused' },
    { id: 'cards', name: 'Review Cards', description: 'Grid of customer reviews' },
    { id: 'grid', name: 'Masonry Grid', description: 'Dynamic layout for social proof' }
];

interface TestimonialProps {
    data?: any;
    primaryColor?: string;
}

const MinimalTestimonial: React.FC<TestimonialProps> = ({ data }) => (
    <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-neutral-300 mx-auto mb-8" />
            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                "{data?.heading || 'This product completely changed my workflow. The attention to detail is unmatched in the industry.'}"
            </h3>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                    <div className="font-bold text-neutral-900">Alex Morgan</div>
                    <div className="text-sm text-neutral-500">Product Designer, Stripe</div>
                </div>
            </div>
        </div>
    </section>
);

const CardsTestimonial: React.FC<TestimonialProps> = ({ primaryColor }) => (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Trusted by Creators</h2>
                <p className="text-neutral-500">Join thousands of satisfied customers worldwide.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                        <div className="flex gap-1 mb-6 text-yellow-500">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg text-neutral-700 mb-6 leading-relaxed">"Absolutely blown away by the quality. I've tried many alternatives but this one stands out for its build quality and design."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
                                <img src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-sm">James Wilson</div>
                                <div className="text-xs text-neutral-500">Verified Buyer</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const GridTestimonial: React.FC<TestimonialProps> = ({ primaryColor }) => (
    <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Don't just take our word for it.</h2>
                <p className="text-xl text-neutral-400 mb-12 max-w-md">See what the community has to say about their experience with Nexus.</p>
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors">Read all reviews</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                    {[1, 2].map(i => (
                        <div key={i} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
                            <p className="text-neutral-300 text-sm mb-4">"Incredible attention to detail. A must-have."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                                <span className="text-xs font-bold text-neutral-500">@user{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-4">
                    {[3, 4].map(i => (
                        <div key={i} className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
                            <p className="text-neutral-300 text-sm mb-4">"Best purchase I've made all year. Highly recommended."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-neutral-700"></div>
                                <span className="text-xs font-bold text-neutral-500">@user{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export const TESTIMONIAL_COMPONENTS: Record<string, React.FC<TestimonialProps>> = {
    'minimal': MinimalTestimonial,
    'cards': CardsTestimonial,
    'grid': GridTestimonial
};

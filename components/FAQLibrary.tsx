import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ_OPTIONS = [
    { id: 'accordion', name: 'Accordion', description: 'Expandable questions list' },
    { id: 'grid', name: 'Grid Layout', description: '2-column question grid' },
    { id: 'simple', name: 'Simple List', description: 'Clean vertical list' }
];

interface FAQProps {
    data?: any;
    primaryColor?: string;
}

const FAQ_DATA = [
    { q: "What is the return policy?", a: "We offer a 30-day money-back guarantee on all products. If you're not satisfied, simply return it for a full refund." },
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 100 countries worldwide. Shipping rates vary by location." },
    { q: "Is there a warranty?", a: "All our products come with a 1-year limited warranty against manufacturing defects." }
];

const AccordionFAQ: React.FC<FAQProps> = ({ primaryColor }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {FAQ_DATA.map((item, i) => (
                    <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
                        >
                            <span className="font-bold text-lg">{item.q}</span>
                            {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                        {openIndex === i && (
                            <div className="p-6 pt-0 bg-white text-neutral-600 leading-relaxed">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

const GridFAQ: React.FC<FAQProps> = () => (
    <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 mb-16">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
                    <p className="text-neutral-500 text-lg">Everything you need to know about the product and billing.</p>
                </div>
                <div className="flex-1 flex justify-end items-start">
                    <button className="px-6 py-3 bg-black text-white rounded-lg font-bold text-sm">Contact Support</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {FAQ_DATA.map((item, i) => (
                    <div key={i}>
                        <h3 className="font-bold text-xl mb-3 flex items-start gap-3">
                            <HelpCircle size={20} className="text-neutral-400 mt-1 shrink-0" />
                            {item.q}
                        </h3>
                        <p className="text-neutral-500 leading-relaxed pl-8">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SimpleFAQ: React.FC<FAQProps> = () => (
    <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Help Center</h2>
        <div className="space-y-12">
            {FAQ_DATA.map((item, i) => (
                <div key={i} className="pb-12 border-b border-neutral-100 last:border-0">
                    <h3 className="font-bold text-xl mb-4">{item.q}</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed">{item.a}</p>
                </div>
            ))}
        </div>
    </section>
);

export const FAQ_COMPONENTS: Record<string, React.FC<FAQProps>> = {
    'accordion': AccordionFAQ,
    'grid': GridFAQ,
    'simple': SimpleFAQ
};

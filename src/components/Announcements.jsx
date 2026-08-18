// Announcements.jsx
// Three-card announcements section

const announcements = [
    {
        id: 1,
        title: "Holiday Schedule Notice",
        description: "Check out our modified operating hours and schedule adjustments for the upcoming break.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "New Database Access",
        description: "New full-text research platforms, including Atla PLUS and EBSCOhost databases, are now live.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Examination Period Reminder",
        description: "Learn more about extended reading room hours and overnight reserve checkouts for finals week.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    },
];

export default function Announcements() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif">
                        Announcements
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest library hours, holiday schedules, and urgent announcements.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {announcements.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
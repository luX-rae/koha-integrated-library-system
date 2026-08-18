// Discover.jsx
// "Discover Books and Collections" section with three feature cards

const discoverItems = [
    {
        id: 1,
        title: "Featured Books",
        description: "Curated titles and recommended reading selected by the library staff.",
        linkText: "View all featured →",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        href: "#featured",
    },
    {
        id: 2,
        title: "New Acquisitions",
        description: "The latest books and resources added to the library collection this term.",
        linkText: "Browse new arrivals →",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
        href: "#new-acquisitions",
    },
    {
        id: 3,
        title: "Course Reserves",
        description: "Find the textbooks your professors have reserved for your classes.",
        linkText: "Find books for your class →",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
        href: "#course-reserves",
    },
];

export default function Discover() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif">
                        Discover Books and Collections
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Browse featured titles, new arrivals, and books reserved for your courses.
                    </p>
                    <div className="mt-4">
                        <a
                            href="#all-collections"
                            className="text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                        >
                            View all of our services →
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {discoverItems.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <a
                                    href={item.href}
                                    className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                                >
                                    {item.linkText}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
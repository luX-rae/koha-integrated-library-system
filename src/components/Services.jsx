// Services.jsx
// "Explore Our Services" section with four service cards

const services = [
    {
        id: 1,
        title: "Circulation & Borrowing Services",
        description: "Borrow, renew, and reserve your reading materials with ease.",
        href: "#circulation",
    },
    {
        id: 2,
        title: "Research & Reference Support",
        description: "Discover books, request scans, and connect with librarians.",
        href: "#research",
    },
    {
        id: 3,
        title: "Technology & Facilities Access",
        description: "Access public computers, Wi-Fi, and dedicated study spaces.",
        href: "#technology",
    },
    {
        id: 4,
        title: "Digital Services & Requests",
        description: "Submit requests, explore PDs, and get instant answers 24/7.",
        href: "#digital",
    },
];

export default function Services() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif">
                        Explore Our Services
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Everything you need to make the library work for your research and study.
                    </p>
                    <div className="mt-4">
                        <a
                            href="#all-services"
                            className="text-sm font-medium text-blue-700 hover:text-blue-900 transition"
                        >
                            View all of our services →
                        </a>
                    </div>
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <a
                            key={service.id}
                            href={service.href}
                            className="group block bg-blue-800 hover:bg-blue-900 text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                        >
                            {/* Placeholder image area – replace with real photos later */}
                            <div className="aspect-[4/3] bg-blue-700/50 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                                    📚
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-base mb-2 leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-blue-100 text-sm leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium text-amber-300 group-hover:text-amber-200 transition">
                                    Learn more →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
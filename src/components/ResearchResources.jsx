// ResearchResources.jsx
// "Research Resources" section – trusted academic databases & tools

const resources = [
    {
        id: 1,
        name: "EBSCOhost",
        description: "Full-text academic journals, e-books, and research databases",
        // Replace with actual logo later
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/EBSCO_Information_Services_logo.svg/320px-EBSCO_Information_Services_logo.svg.png",
        href: "#ebscohost",
    },
    {
        id: 2,
        name: "Global DTL",
        description: "Digital Theological Library – open-access theological resources",
        logo: null, // placeholder
        href: "#global-dtl",
    },
    {
        id: 3,
        name: "Accordance Bible Software",
        description: "Advanced biblical research tools and original language resources",
        logo: null, // placeholder
        href: "#accordance",
    },
];

export default function ResearchResources() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif">
                        Research Resources
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Access trusted academic databases, digital libraries, and theological research tools to support your studies and scholarly work.
                    </p>
                </div>

                {/* Resource cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-8 flex flex-col items-center text-center"
                        >
                            {/* Logo area */}
                            <div className="h-20 flex items-center justify-center mb-6">
                                {item.logo ? (
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="max-h-14 max-w-[180px] object-contain"
                                    />
                                ) : (
                                    <div className="w-40 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm font-medium">
                                        {item.name}
                                    </div>
                                )}
                            </div>

                            {/* Name + description */}
                            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
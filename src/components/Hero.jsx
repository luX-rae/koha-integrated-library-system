// Hero.jsx
// Hero section with background image, welcome message, and prominent OPAC search bar

export default function Hero() {
    return (
        <section className="relative">
            {/* Background image + overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80"
                    alt="Library interior with bookshelves"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/75 to-blue-950/60"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                {/* Welcome text */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                        Welcome to the BSOP Library Portal
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Access thousands of theological resources, the Koha OPAC catalog, EBSCOhost databases, and specialized collections instantly.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mt-10 max-w-3xl mx-auto">
                    <form
                        action="/cgi-bin/koha/opac-search.pl"
                        method="get"
                        className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col sm:flex-row"
                    >
                        {/* Keyword dropdown */}
                        <div className="relative border-b sm:border-b-0 sm:border-r border-gray-200">
                            <select
                                name="idx"
                                className="appearance-none bg-transparent text-sm font-medium text-gray-700 pl-4 pr-9 py-4 focus:outline-none cursor-pointer w-full sm:w-36"
                            >
                                <option value="">KEYWORD</option>
                                <option value="ti">Title</option>
                                <option value="au">Author</option>
                                <option value="su">Subject</option>
                                <option value="nb">ISBN</option>
                            </select>
                            <svg
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Search input */}
                        <input
                            type="text"
                            name="q"
                            placeholder="Search books, authors, subjects, ISBN..."
                            className="flex-1 px-4 py-4 text-base text-gray-800 placeholder-gray-400 focus:outline-none min-w-0"
                            aria-label="Search the library catalog"
                        />

                        {/* Search button */}
                        <button
                            type="submit"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 transition flex items-center justify-center gap-2"
                        >
                            SEARCH
                        </button>
                    </form>

                    {/* Quick links under search */}
                    <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100">
                        <a href="/cgi-bin/koha/opac-search.pl" className="hover:text-white transition underline-offset-2 hover:underline">
                            Advanced Search
                        </a>
                        <a href="#new-arrivals" className="hover:text-white transition underline-offset-2 hover:underline">
                            New Arrivals
                        </a>
                        <a href="#course-reserves" className="hover:text-white transition underline-offset-2 hover:underline">
                            Course Reserves
                        </a>
                        <a href="/cgi-bin/koha/opac-browse.pl" className="hover:text-white transition underline-offset-2 hover:underline">
                            Browse by Subject
                        </a>
                    </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {[
                        { label: "Search Catalog", icon: "🔍", desc: "Find books, journals, theses & collections" },
                        { label: "My Account", icon: "👤", desc: "View loans, holds & account status" },
                        { label: "Renew Books", icon: "🔄", desc: "Extend due dates for your loans" },
                        { label: "Reserve Books", icon: "📌", desc: "Place a hold on available items" },
                        { label: "Research Help", icon: "💬", desc: "Chat, email or book a consultation" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="flex items-center gap-2 bg-white/95 hover:bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-full shadow-md transition hover:shadow-lg"
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
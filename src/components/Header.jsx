// Header.jsx
// Sticky top navigation – matches the clean BSOP Library design
// Will later be adapted for Koha OpacMainUserBlock injection

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">

                    {/* Logo + Wordmark */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:bg-blue-900 transition">
                            {/* Replace with actual logo image later */}
                            <span className="text-xs leading-tight text-center">BSOP</span>
                        </div>
                        <div className="leading-tight">
                            <div className="font-semibold text-blue-900 text-sm tracking-wide">
                                BSOP LIBRARY
                            </div>
                            <div className="text-[11px] text-gray-500 hidden sm:block">
                                Biblical Seminary of the Philippines
                            </div>
                        </div>
                    </a>

                    {/* Primary Navigation */}
                    <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-gray-600">
                        <a href="/" className="relative text-blue-800 font-semibold">
                            Home
                            <span className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-red-600 rounded-full"></span>
                        </a>
                        <a href="/about" className="hover:text-blue-800 transition">About</a>
                        <a href="/collection" className="hover:text-blue-800 transition">Library Collection</a>
                        <a href="/services" className="hover:text-blue-800 transition">Services</a>
                        <a href="/resources" className="hover:text-blue-800 transition">Resources</a>
                        <a href="/contact" className="hover:text-blue-800 transition">Contact</a>
                    </nav>

                    {/* LOGIN Button */}
                    <a
                        href="/cgi-bin/koha/opac-user.pl"
                        className="inline-flex items-center px-5 py-2 rounded-md bg-blue-800 text-white text-sm font-medium hover:bg-blue-900 transition shadow-sm"
                    >
                        LOGIN
                    </a>
                </div>
            </div>
        </header>
    );
}
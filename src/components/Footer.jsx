// Footer.jsx
// Full institutional footer with contact info, quick links, and policies

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Institution info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                                BSOP
                            </div>
                            <div>
                                <div className="font-semibold text-sm tracking-wide">
                                    Biblical Seminary of the Philippines
                                </div>
                            </div>
                        </div>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            77-B Karuhatan Road, Valenzuela City,<br />
                            PHILIPPINES 1441
                        </p>
                        <p className="mt-3 text-blue-200 text-sm">
                            ☎ +63 2 8292-6765<br />
                            ☎ +63 2 8292-6675
                        </p>
                    </div>

                    {/* Library Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-amber-300">
                            Library Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-blue-100">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="/collection" className="hover:text-white transition">Library Collection</a></li>
                            <li><a href="/services" className="hover:text-white transition">Services</a></li>
                            <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="https://bsop.edu.ph" className="hover:text-white transition">BSOP Website</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-amber-300">
                            Stay Connected
                        </h4>
                        <ul className="space-y-2 text-sm text-blue-100">
                            <li>
                                <a href="#" className="hover:text-white transition flex items-center gap-2">
                                    <span>📘</span> BSOP Library
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition flex items-center gap-2">
                                    <span>📷</span> BSOP
                                </a>
                            </li>
                            <li>
                                <a href="mailto:library@bsop.edu.ph" className="hover:text-white transition flex items-center gap-2">
                                    <span>✉️</span> library@bsop.edu.ph
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Library Policies */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-amber-300">
                            Library Policies
                        </h4>
                        <ul className="space-y-2 text-sm text-blue-100">
                            <li><a href="#access" className="hover:text-white transition">Access Policy</a></li>
                            <li><a href="#borrowing" className="hover:text-white transition">Borrowing Rules</a></li>
                            <li><a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a></li>
                            <li><a href="#request" className="hover:text-white transition">Request an Item</a></li>
                            <li><a href="#map" className="hover:text-white transition">Library Map</a></li>
                            <li><a href="#hours" className="hover:text-white transition">Library Hours</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-sm text-blue-300">
                        © 2026 Biblical Seminary of the Philippines. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
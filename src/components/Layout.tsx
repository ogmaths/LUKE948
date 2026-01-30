import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Safeguarding", href: "/safeguarding" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  const logoUrl = "/logo.jpg";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-black text-white shadow-sm sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 md:h-32">
            {/* Logo - Responsive sizing */}
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/images/Logo Luke948-Photoroom.png" 
                alt="Luke 948 Homes Logo" 
                className="h-20 w-20 md:h-40 md:w-40 object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-gray-900 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-gray-900 rounded-lg">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.href)
                        ? "bg-white text-black"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoUrl} 
                  alt="Luke 948" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Providing therapeutic care for vulnerable children with Emotional and Behavioural Difficulties at Alkham House, Maidstone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: info@luke948homes.org.uk</li>
                <li className="pt-2">
                  <span className="text-white font-bold">Emergency: 999</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Luke 948 Homes. All rights reserved.
              </p>
              <div className="flex space-x-6 text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Safeguarding Statement
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Ofsted Registration
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bitcoin, Menu, X, User, LogOut, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Loan Request', href: '/loan-request', current: location.pathname === '/loan-request', protected: true },
    { name: 'Dashboard', href: '/dashboard', current: location.pathname === '/dashboard', protected: true },
  ];

  const filteredNavigation = navigation.filter(item => !item.protected || user);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center animate-fade-in-down">
              <Link to="/" className="flex items-center space-x-2 hover-glow rounded-lg p-2 transition-all duration-300">
                <Bitcoin className="h-8 w-8 text-orange-500 animate-bitcoin-spin" />
                <span className="text-2xl font-bold gradient-text">Bitdoo</span>
                <Sparkles className="h-4 w-4 text-orange-400 animate-pulse" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-down">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
                    item.current
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="flex items-center space-x-4 animate-slide-in-right">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-full">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover-lift"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 animate-slide-in-right">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-primary text-white px-6 py-2 rounded-lg text-sm font-medium shadow-lg hover-glow"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center animate-fade-in-down">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    item.current
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="border-t pt-4 mt-4 animate-fade-in-up">
                  <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg mx-2 mb-2">
                    <User className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="text-base font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 mx-2"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t pt-4 mt-4 space-y-2 animate-fade-in-up">
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 mx-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-3 rounded-lg text-base font-medium btn-primary text-white shadow-lg mx-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 relative">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="col-span-1 md:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4 hover-glow rounded-lg p-2 w-fit">
                <Bitcoin className="h-8 w-8 text-orange-500 animate-float" />
                <span className="text-2xl font-bold gradient-text">Bitdoo</span>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Empowering global communities with decentralized Bitcoin microloans. 
                Built on the Internet Computer for trustless, transparent lending.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm font-semibold text-orange-400 tracking-wider uppercase mb-4">
                Platform
              </h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Home</Link></li>
                <li><Link to="/loan-request" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Apply for Loan</Link></li>
                <li><Link to="/dashboard" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Dashboard</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-sm font-semibold text-orange-400 tracking-wider uppercase mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 relative z-10">
            <p className="text-center text-gray-300 animate-fade-in-up">
              © 2025 Bitdoo. Built with ❤️ on the Internet Computer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F4F1EC] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl text-[#6B4A2D]">
              Direto do Campo
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-[#6F7F52]'
                    : 'text-[#2F1F16] hover:text-[#6F7F52]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5544999763686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#6F7F52] text-white px-4 py-2 rounded-lg hover:bg-[#5C6A45] transition-colors"
            >
              <MessageCircle size={20} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#2F1F16] hover:text-[#6F7F52] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? 'text-[#6F7F52] bg-[#F4F1EC]'
                      : 'text-[#2F1F16] hover:text-[#6F7F52] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5544999763686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#6F7F52] text-white px-4 py-3 rounded-lg hover:bg-[#5C6A45] transition-colors mx-4"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

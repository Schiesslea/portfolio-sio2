import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
            >
              <span>Andy Schiesslé</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={isHomePage ? '#about' : '/#about'}
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              À propos de moi
            </Link>
            <Link
              to={isHomePage ? '#skills' : '/#skills'}
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Compétences
            </Link>
            <Link
              to={isHomePage ? '#projects' : '/#projects'}
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Projets
            </Link>
            <Link
              to={isHomePage ? '#certifications' : '/#certifications'}
              onClick={() => scrollToSection('certifications')}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Certifications
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-300 hover:text-white" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 hover:text-black" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-300 hover:text-white" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 hover:text-black" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to={isHomePage ? '#about' : '/#about'}
                onClick={() => {
                  scrollToSection('about');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                À propos de moi
              </Link>
              <Link
                to={isHomePage ? '#skills' : '/#skills'}
                onClick={() => {
                  scrollToSection('skills');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Compétences
              </Link>
              <Link
                to={isHomePage ? '#projects' : '/#projects'}
                onClick={() => {
                  scrollToSection('projects');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Projets
              </Link>
              <Link
                to={isHomePage ? '#certifications' : '/#certifications'}
                onClick={() => {
                  scrollToSection('certifications');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                Certifications
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
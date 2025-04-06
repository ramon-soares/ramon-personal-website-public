
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-display font-bold">Ramon Soares | Analista de Dados</h1>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? "absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4" : "hidden"}`}>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Sobre</a>
            <a href="#experiencia" className="text-gray-600 hover:text-primary transition-colors">Experiência</a>
            <a href="#habilidades" className="text-gray-600 hover:text-primary transition-colors">Habilidades</a>
            <a href="#social" className="text-gray-600 hover:text-primary transition-colors">Social</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <header className="fixed md:relative top-0 left-0 w-full z-50 bg-[#020617] shadow-2xl transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-32">
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <img
              src="/img/moraes_logo_trans2.png"
              alt="Moraes Climatização"
              // MUDANÇA 1: Aumentei para h-28 (112px).
              // Isso vai fazer a logo crescer e ocupar mais espaço horizontalmente.
              className="h-60 w-auto object-contain hover:opacity-95 transition-opacity"
            />
          </div>

          {/* Menu Desktop */}
          {/* MUDANÇA 2: space-x-16 para dar mais espaço entre os links */}
          <nav className="hidden md:flex items-center space-x-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // MUDANÇA 3: text-xl (fonte maior)
                className="text-gray-200 hover:text-brand-orange transition-colors duration-200 font-bold text-xl uppercase tracking-wider relative group py-2"
              >
                {link.name}
                {/* MUDANÇA 4: h-1 (linha mais grossa no hover) */}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="#contato"
              className="bg-gradient-to-r from-brand-orange to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,136,0,0.5)] hover:shadow-[0_0_30px_rgba(255,136,0,0.9)] transition-all transform hover:-translate-y-1 flex items-center gap-2 text-lg"
            >
              <Phone size={22} />
              Orçamento
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-brand-orange transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>
      </div>

      {/* LINHA NEON */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 blur-xl opacity-80 z-0"></div>
        <div className="h-[4px] w-full bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-orange relative z-10"></div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#020617] border-t border-gray-800 absolute w-full shadow-2xl z-40">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-xl font-medium text-gray-200 hover:text-brand-orange w-full text-center hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

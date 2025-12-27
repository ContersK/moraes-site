import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Lista de links para facilitar a manutenção
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2">
            {/* Ajuste o h-12 conforme necessário para o tamanho do logo */}
            <img
              src="/img/Moraes_Logo.jpg"
              alt="Moraes Climatização"
              className="h-14 w-auto object-contain rounded-md"
            />
          </div>

          {/* Menu Desktop (Escondido no Mobile) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-orange transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}

            {/* Botão de Destaque no Menu */}
            <a
              href="#contato"
              className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Orçamento
            </a>
          </nav>

          {/* Botão Menu Mobile (Hambúrguer) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Abre quando clica no hambúrguer) */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-orange hover:bg-gray-800 rounded-md w-full text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-full bg-brand-orange text-white text-center py-3 rounded-md font-bold"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

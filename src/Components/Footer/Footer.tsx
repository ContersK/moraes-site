export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Moraes Climatização</h3>
          <p className="text-sm mt-1">
            Conforto e qualidade para seu ambiente.
          </p>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Moraes Climatização. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

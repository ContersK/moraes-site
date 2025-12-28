import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Services } from "./Components/Card/Services";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { WhatsAppIcon } from "./Components/WhatsAppIcon/WhatsAppIcon";
function App() {
  return (
    // Fundo azul escuro para combinar com o header e evitar linhas brancas
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <Header />

      {/* padding-top de 32 (128px) para compensar o header */}
      <main className="flex-grow pt-32 md:pt-0 bg-gray-50">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />

      <a
        href="https://wa.me/5518996179881"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center gap-2 group"
        aria-label="Falar no WhatsApp"
      >
        {/* Usando o ícone novo aqui */}
        <WhatsAppIcon size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}

export default App;

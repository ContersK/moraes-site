import { ArrowRight, MapPin } from "lucide-react"; // Adicionei o MapPin
import { WhatsAppIcon } from "../WhatsAppIcon/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[70vh] min-h-[500px] md:min-h-[550px] flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="Instalação de Ar Condicionado"
          className="w-full h-full object-cover"
        />
        {/* Overlay um pouco mais escuro para garantir a leitura do novo badge */}
        <div className="absolute inset-0 bg-[#020617]/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* --- NOVO BADGE "SOFT" --- */}
        {/* Removemos o pisca-pisca e a borda laranja agressiva. */}
        <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-brand-blue/30 mb-8 shadow-lg">
          <MapPin className="text-brand-orange" size={20} />
          <span className="text-gray-100 font-medium tracking-wide uppercase text-sm md:text-base">
            Atendemos Birigui e Região
          </span>
        </div>
        {/* ------------------------- */}

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Soluções Completas em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-400 to-brand-blue">
            Climatização
          </span>{" "}
          e <span className="text-brand-orange">Elétrica</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
          Instalação, manutenção e limpeza com padrão técnico de excelência.
          Conforto e segurança para sua casa ou empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="https://wa.me/5518996179881"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-orange-500/30"
          >
            {/* Aqui está o ícone novo */}
            <WhatsAppIcon size={28} />
            Orçamento via WhatsApp
          </a>

          <a
            href="#servicos"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-brand-dark px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg"
          >
            Nossos Serviços
            <ArrowRight size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

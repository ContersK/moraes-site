import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center justify-center"
    >
      {/* 1. Imagem de Fundo com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="Instalação de Ar Condicionado"
          className="w-full h-full object-cover"
        />
        {/* Camada escura para o texto ficar legível */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 2. Conteúdo Centralizado */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange font-semibold text-sm mb-6 animate-pulse">
          Atendemos Birigui e Região
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Soluções Completas em <br />
          <span className="text-brand-blue">Climatização</span> e{" "}
          <span className="text-brand-orange">Elétrica</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Instalação, manutenção e limpeza de ar condicionado com padrão técnico
          de excelência. Conforto e segurança para sua casa ou empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botão WhatsApp e Serviços */}
          <a
            href="https://wa.me/5518996179881" // Coloque o número real depois
            target="_blank"
            className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            <MessageCircle size={24} />
            Orçamento via WhatsApp
          </a>

          <a
            href="#servicos"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Nossos Serviços
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

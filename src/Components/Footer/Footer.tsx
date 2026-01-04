import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f19] text-gray-300 relative mt-auto">
      {/* --- 1. FAIXA DE DESTAQUE (CTA) --- */}
      <div className="bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pattern-grid-lg opacity-20"></div>
        <div className="container mx-auto px-6 md:px-12 py-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Pronto para climatizar seu ambiente?
              </h3>
              <p className="text-white/90 font-medium">
                Solicite um orçamento sem compromisso hoje mesmo.
              </p>
            </div>
            <a
              href="https://wa.me/5518996179881"
              target="_blank"
              className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Phone size={20} />
              Falar com Técnico
            </a>
          </div>
        </div>
      </div>

      {/* --- 2. CONTEÚDO PRINCIPAL --- */}
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* COLUNA 1: MARCA & IDENTIDADE */}
          <div className="space-y-6">
            {/* --- CORREÇÃO AQUI: Removi o box branco --- */}
            {/* A logo agora fica direto no fundo escuro, usando a transparência */}
            <img
              src="/img/moraes_logo_trans2.png"
              alt="Moraes Climatização"
              // Aumentei para h-20 para dar mais destaque
              className="h-28 w-auto object-contain mb-2 mx-auto "
            />
            {/* ------------------------------------------ */}

            <p className="text-gray-400 leading-relaxed text-lg">
              Soluções completas em climatização e elétrica para residências e
              empresas. Qualidade técnica, segurança e compromisso com o seu
              conforto.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="bg-[#1a202c] p-3 rounded-lg hover:bg-[#1877F2] hover:text-white transition-all border border-gray-800"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/moraes.eletroclimatizacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a202c] p-3 rounded-lg hover:bg-[#E1306C] hover:text-white transition-all border border-gray-800"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: SERVIÇOS */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-blue rounded-full"></span>
              Nossos Serviços
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <li className="group">
                <a
                  href="#servicos"
                  className="flex items-center gap-3 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue group-hover:text-brand-orange transition-colors"
                  />
                  Instalação e Manutenção de Ar
                </a>
              </li>
              <li className="group">
                <a
                  href="#servicos"
                  className="flex items-center gap-3 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue group-hover:text-brand-orange transition-colors"
                  />
                  Projetos e Reparos Elétricos
                </a>
              </li>
              <li className="group">
                <a
                  href="#servicos"
                  className="flex items-center gap-3 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue group-hover:text-brand-orange transition-colors"
                  />
                  Infraestrutura para Obras
                </a>
              </li>
              <li className="group">
                <a
                  href="#servicos"
                  className="flex items-center gap-3 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-blue group-hover:text-brand-orange transition-colors"
                  />
                  Contratos PMOC (Empresas)
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO DIRETO */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
              Central de Atendimento
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin
                  className="text-brand-orange mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h5 className="text-white font-bold">Localização</h5>
                  <p className="text-sm">Birigui - SP</p>
                  <p className="text-sm text-gray-500">
                    Atendimento em toda a região
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="text-brand-orange mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h5 className="text-white font-bold">Telefones</h5>
                  <a
                    href="https://wa.me/5518996179881"
                    className="block text-lg hover:text-brand-blue transition-colors"
                  >
                    (18) 99617-9881
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="text-brand-orange mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h5 className="text-white font-bold">E-mail</h5>
                  <a
                    href="mailto:contato@moraesclimatizacao.com.br"
                    className="text-sm hover:text-brand-blue transition-colors"
                  >
                    contato@moraesclimatizacao.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 3. BARRA INFERIOR --- */}
      <div className="border-t border-gray-800 bg-[#05080f]">
        <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} Moraes Climatização e Elétrica. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Equipe técnica certificada e treinada",
    "Atendimento ágil em Birigui e região",
    "Garantia em todos os serviços prestados",
    "Orçamento transparente, sem surpresas",
    "Experiência em projetos residenciais e comerciais",
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Lado da Imagem */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Borda decorativa laranja atrás da foto */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-brand-orange rounded-xl"></div>

              <img
                src="/img/MoraesManutencao.png"
                alt="Técnico realizando manutenção"
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Lado do Texto */}
          <div className="w-full md:w-1/2">
            <h2 className="text-brand-blue font-bold text-lg mb-2 uppercase tracking-wider">
              Sobre a Empresa
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Excelência em Climatização e Elétrica
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              A <strong>Moraes Climatização</strong> nasceu com o objetivo de
              levar conforto e segurança para sua casa ou empresa. Entendemos
              que um ambiente bem climatizado não é luxo, é qualidade de vida.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Trabalhamos com seriedade, utilizando as melhores ferramentas do
              mercado e seguindo rigorosamente as normas técnicas. Seja para uma
              instalação simples ou um projeto elétrico complexo, nosso
              compromisso é a sua satisfação total.
            </p>

            {/* Lista de Diferenciais */}
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-brand-orange flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#contato"
                className="inline-block bg-brand-dark text-white px-8 py-3 rounded-md font-bold hover:bg-brand-blue transition-colors"
              >
                Fale com um especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

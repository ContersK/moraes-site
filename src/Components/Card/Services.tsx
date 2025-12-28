import {
  Wrench,
  Snowflake,
  Fan,
  ShieldCheck,
  Zap,
  ThermometerSun,
} from "lucide-react";

export function Services() {
  const servicesList = [
    // type: 'ac' (Ar Condicionado - Azul)
    // type: 'electric' (Elétrica - Laranja)

    {
      type: "ac",
      icon: <Snowflake size={40} />,
      title: "Instalação de Ar Condicionado",
      description:
        "Instalação técnica seguindo todas as normas do fabricante para garantir a garantia e vida útil do seu aparelho.",
    },
    {
      type: "ac",
      icon: <Wrench size={40} />,
      title: "Manutenção Preventiva",
      description:
        "Evite quebras e alto consumo de energia. Limpeza profunda e verificação de gás para seu ar render mais.",
    },
    {
      type: "ac",
      icon: <Fan size={40} />,
      title: "Limpeza e Higienização",
      description:
        "Elimine fungos e bactérias. Utilizamos produtos específicos que protegem a saúde da sua família e funcionários.",
    },
    {
      type: "electric", // <--- ESSE AQUI É O DIFERENTE
      icon: <Zap size={40} />,
      title: "Serviços Elétricos",
      description:
        "Instalação de pontos de energia, quadros de distribuição e manutenção elétrica residencial e comercial.",
    },
    {
      type: "ac",
      icon: <ThermometerSun size={40} />,
      title: "Infraestrutura",
      description:
        "Preparação de tubulação embutida para obras e reformas. Deixe tudo pronto para receber o ar condicionado.",
    },
    {
      type: "ac",
      icon: <ShieldCheck size={40} />,
      title: "Contratos Mensais",
      description:
        "Para empresas: planos de manutenção periódica (PMOC) exigidos por lei, garantindo ar puro e climatizado.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Trabalhamos com todas as marcas e modelos, oferecendo soluções
            completas para climatização e elétrica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesList.map((service, index) => {
            // Lógica para definir as cores baseadas no tipo
            const isElectric = service.type === "electric";

            // Cores para Ar Condicionado (Azul)
            const acClasses =
              "hover:border-brand-blue hover:shadow-brand-blue/20";
            const acIconClasses =
              "text-brand-blue bg-blue-50 group-hover:bg-blue-100";

            // Cores para Elétrica (Laranja/Amarelo)
            const electricClasses =
              "hover:border-brand-orange hover:shadow-brand-orange/30";
            const electricIconClasses =
              "text-brand-orange bg-orange-50 group-hover:bg-orange-100";

            return (
              <div
                key={index}
                className={`
                  bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 
                  hover:-translate-y-2 border-b-[6px] border-transparent group cursor-default flex flex-col
                  ${isElectric ? electricClasses : acClasses}
                `}
              >
                <div className="flex items-center gap-5 mb-5">
                  <div
                    className={`
                    flex-shrink-0 p-3 rounded-2xl transition-colors duration-300
                    ${isElectric ? electricIconClasses : acIconClasses}
                  `}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg flex-grow pt-4 border-t border-gray-100">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

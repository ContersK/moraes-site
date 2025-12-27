import {
  Wrench,
  Snowflake,
  Fan,
  ShieldCheck,
  Zap,
  ThermometerSun,
} from "lucide-react";

const services = [
  {
    icon: <Snowflake size={40} />,
    title: "Instalação de Ar Condicionado",
    description:
      "Instalação técnica seguindo todas as normas do fabricante para garantir a garantia e vida útil do seu aparelho.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Manutenção Preventiva",
    description:
      "Evite quebras e alto consumo de energia. Limpeza profunda e verificação de gás para seu ar render mais.",
  },
  {
    icon: <Fan size={40} />,
    title: "Limpeza e Higienização",
    description:
      "Elimine fungos e bactérias. Utilizamos produtos específicos que protegem a saúde da sua família e funcionários.",
  },
  {
    icon: <Zap size={40} />,
    title: "Serviços Elétricos",
    description:
      "Instalação de pontos de energia, quadros de distribuição e manutenção elétrica residencial e comercial.",
  },
  {
    icon: <ThermometerSun size={40} />,
    title: "Infraestrutura",
    description:
      "Preparação de tubulação embutida para obras e reformas. Deixe tudo pronto para receber o ar condicionado.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Contratos Mensais",
    description:
      "Para empresas: planos de manutenção periódica (PMOC) exigidos por lei, garantindo ar puro e climatizado.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trabalhamos com todas as marcas e modelos, oferecendo soluções
            completas para climatização e elétrica.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-brand-blue group"
            >
              <div className="text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Solicite seu orçamento ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">
              Informações de Contato
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md text-brand-orange">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Telefone / WhatsApp</h4>
                <p className="text-gray-600">(18) 99999-9999</p>
                <p className="text-sm text-gray-500">
                  Atendimento seg. a sex. das 8h às 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md text-brand-orange">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">E-mail</h4>
                <p className="text-gray-600">
                  contato@moraesclimatizacao.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md text-brand-orange">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Localização</h4>
                <p className="text-gray-600">Birigui - SP</p>
                <p className="text-sm text-gray-500">Atendemos toda a região</p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-8">
              <h4 className="font-bold text-gray-800 mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    <option value="instalacao">Instalação</option>
                    <option value="manutencao">Manutenção / Limpeza</option>
                    <option value="eletrica">Serviços Elétricos</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

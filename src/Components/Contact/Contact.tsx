import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";

export function Contact() {
  // Estados para guardar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: "",
  });

  // Função para atualizar os dados enquanto digita
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Função que envia para o WhatsApp
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name) {
      alert("Por favor, preencha seu nome.");
      return;
    }

    const companyPhone = "5518996179881";

    const text = `
*Olá! Vim através do site e gostaria de um orçamento.*
--------------------------------
*Nome:* ${formData.name}
*Serviço:* ${formData.service || "Não especificado"}
*Mensagem:* ${formData.message || "Sem mensagem adicional"}
    `.trim();

    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg">
            Solicite seu orçamento ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Lado Esquerdo: Informações */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-8">
              Informações de Contato
            </h3>

            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-lg text-brand-orange flex-shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800 mb-1">
                  Telefone / WhatsApp
                </h4>
                <p className="text-gray-600 text-lg">(18)996179881</p>
                <p className="text-sm text-gray-500 mt-1">
                  Atendimento seg. a sex. das 8h às 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-lg text-brand-orange flex-shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800 mb-1">E-mail</h4>
                <p className="text-gray-600 text-lg">
                  contato@moraesclimatizacao.com.br
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-white p-4 rounded-full shadow-lg text-brand-orange flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800 mb-1">
                  Localização
                </h4>
                <p className="text-gray-600 text-lg">Birigui - SP</p>
                <p className="text-sm text-gray-500 mt-1">
                  Atendemos toda a região
                </p>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="font-bold text-gray-800 mb-6 text-lg">
                Siga-nos nas redes sociais
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/moraes.eletroclimatizacao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white p-4 rounded-full hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-md"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="#"
                  className="bg-brand-blue text-white p-4 rounded-full hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-md"
                >
                  <Facebook size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário Funcional */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: `right 1rem center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `1.5em 1.5em`,
                  }}
                >
                  <option value="">Selecione...</option>
                  <option value="Instalação de Ar">
                    Instalação de Ar Condicionado
                  </option>
                  <option value="Manutenção/Limpeza">
                    Manutenção / Limpeza
                  </option>
                  <option value="Elétrica">Serviços Elétricos</option>
                  <option value="Infraestrutura">Infraestrutura</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold py-5 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

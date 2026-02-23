import { useState, type FormEvent } from "react";
import { Send, Phone, Snowflake, Zap } from "lucide-react";

export function QuickContact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-17790194707/auTACLCYgf0bEJOog6NC",
      });
    }

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
    <section className="relative -mt-8 z-20 pb-12">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Header do formulário */}
          <div className="bg-gradient-to-r from-brand-blue to-blue-700 px-6 py-5 md:px-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    Solicite seu Orçamento Grátis
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base">
                    Respostas rápidas e atendimento personalizado.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Snowflake size={18} />
                  <span>Ar Condicionado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={18} />
                  <span>Elétrica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSendMessage} className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Seu nome"
                />
              </div>

              {/* Serviço */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Serviço
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: `right 1rem center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `1.5em 1.5em`,
                  }}
                >
                  <option value="">Selecione...</option>
                  <option value="Instalação de Ar">Instalação de Ar</option>
                  <option value="Manutenção/Limpeza">
                    Manutenção / Limpeza
                  </option>
                  <option value="Elétrica">Serviços Elétricos</option>
                  <option value="Infraestrutura">Infraestrutura</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              {/* Botão */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar no WhatsApp
                </button>
              </div>
            </div>

            {/* Mensagem opcional (expansível) */}
            <details className="mt-4 group">
              <summary className="text-brand-blue font-medium cursor-pointer hover:text-blue-700 transition-colors text-sm flex items-center gap-2">
                <span className="group-open:hidden">
                  + Adicionar mensagem (opcional)
                </span>
                <span className="hidden group-open:inline">
                  - Ocultar mensagem
                </span>
              </summary>
              <div className="mt-3">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-0 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>
            </details>
          </form>
        </div>
      </div>
    </section>
  );
}

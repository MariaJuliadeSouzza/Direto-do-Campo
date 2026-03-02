import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {

  return (
    <div className="pt-20 pb-12">
      <SEO 
        title="Contato" 
        description="Entre em contato com a Direto do Campo. Estamos aqui para ajudar com pedidos, dúvidas e informações sobre nossos produtos."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#6B4A2D] hover:underline">Início</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Contato</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-[#2F1F16] mb-4">
            Entre em Contato!
          </h1>
          <p className="text-[#5F5F5F] text-lg max-w-2xl mx-auto">
            Estamos à disposição para atender pedidos, esclarecer dúvidas e fornecer informações sobre nossos produtos e entregas. Envie sua mensagem, responderemos o mais rápido possível.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-8">
          <div className="bg-white rounded-xl shadow-xl p-6 border" style={{ borderColor: 'var(--card-border)' }}>
            <h2 className="text-3xl text-[#2F1F16] mb-4">Informações de Contato</h2>
            <p className="text-[#5F5F5F] mb-4">Atendemos pedidos, dúvidas e informações sobre entregas e produtos. Faça sua encomenda pelo WhatsApp ou telefone!</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#6B4A2D] p-3 rounded-full flex-shrink-0">
                    <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg text-[#2F1F16] mb-1">Telefone</h3>
                  <a href="tel:+5544999763686" className="text-[#5F5F5F] hover:text-[#6F7F52] transition-colors">(44) 99976-3686</a>
                  <div className="text-sm text-[#5F5F5F] mt-1">Seg–Sex: 08:00–18:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#6B4A2D] p-3 rounded-full flex-shrink-0">
                    <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg text-[#2F1F16] mb-1">WhatsApp</h3>
                  <a href="https://wa.me/5544999763686" target="_blank" rel="noopener noreferrer" className="text-[#5F5F5F] hover:text-[#6F7F52] transition-colors">Chamar pelo WhatsApp</a>
                  <div className="text-sm text-[#5F5F5F] mt-1">Resposta rápida via mensagem.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#6B4A2D] p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.4 7 13 7 13s7-7.6 7-13c0-3.9-3.1-7-7-7zM7.5 9c0-2.5 2-4.5 4.5-4.5S16.5 6.5 16.5 9 14.5 13.5 12 13.5 7.5 11.5 7.5 9z"/></svg>
                </div>
                <div>
                  <h3 className="text-lg text-[#2F1F16] mb-1">Endereço</h3>
                  <div className="text-sm text-[#5F5F5F]">Guairaçá — Interior do Paraná</div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex gap-4 justify-center">
              <a href="/sobre" className="inline-block text-center bg-[#6F7F52] text-white px-6 py-3 rounded-lg hover:bg-[#5A6A42] transition-colors">Conheça Nossa História</a>
              <a href="/produtos" className="inline-block text-center bg-[#6F7F52] text-white px-6 py-3 rounded-lg hover:bg-[#5A6A42] transition-colors">Ver Produtos</a>
          </div>
        </div>
      </div>
    </div>
  );
}
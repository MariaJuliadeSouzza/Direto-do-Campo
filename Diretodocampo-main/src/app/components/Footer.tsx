import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#6B4A2D] text-[#F4F1EC] mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-12 pb-24"> {/* extra bottom padding to avoid WhatsApp overlap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre (center on mobile) */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-2">Direto do Campo</h3>
            <p className="text-sm italic text-[#F4F1EC]">Do campo para sua casa!</p>
          </div>

          {/* Links rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Início</Link></li>
              <li><Link to="/produtos" className="hover:underline">Produtos</Link></li>
              <li><Link to="/sobre" className="hover:underline">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:underline">Contato</Link></li>
            </ul>
          </div>

          {/* Contato (center on mobile) */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-4">Fale Conosco</h3>
            <div className="space-y-3 text-[#F4F1EC]">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} />
                <a href="tel:+5544999763686" className="hover:underline">(44) 99976-3686</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="https://wa.me/5544999763686" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#553822]/20 hover:bg-[#553822]/30 px-3 py-2 rounded">
                  <MessageCircle className="text-white" size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <a href="https://instagram.com/direto_do_campo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-white/20 p-3 rounded-full text-white hover:bg-white/10 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/80">
          <p className="text-sm">&copy; {new Date().getFullYear()} Direto do Campo — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

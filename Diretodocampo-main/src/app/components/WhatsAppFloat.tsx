import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5544999763686?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#6F7F52] text-white p-4 rounded-full shadow-lg hover:bg-[#5C6A45] transition-all hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}

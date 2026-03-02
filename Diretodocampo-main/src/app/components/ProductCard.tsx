import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Oi, gostaria de encomendar: ${product.name}`;
  const whatsappUrl = `https://wa.me/5544999763686?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4 flex flex-col h-full" style={{ animationDuration: '500ms' }}>
      <Link to={`/produto/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5 flex-1 flex flex-col">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-xl mb-2 text-gray-500 hover:text-[#6F4426] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500 uppercase bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/produto/${product.id}`}
            className="w-full bg-[#6B4A2D] text-white px-4 py-2 rounded-lg hover:bg-[#553822] transition-colors text-center"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { Leaf, Heart, Shield } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getFeaturedProducts } from '../data/products';

export function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      <SEO 
        title="Início" 
        description="Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais. Direto do Campo para sua casa."
      />
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${new URL('../../imagens/Banner3.jpg', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#D8C7A3] mb-6 drop-shadow-lg">
            Direto do Campo para sua casa!
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais.
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#6F7F52] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#5C6A45] transition-colors shadow-lg"
          >
            Ver Produtos
          </Link>
        </div>
      </section>
      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça nossos produtos mais populares:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-block bg-[#6F7F52] text-white px-8 py-3 rounded-lg hover:bg-[#5C6A45] transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
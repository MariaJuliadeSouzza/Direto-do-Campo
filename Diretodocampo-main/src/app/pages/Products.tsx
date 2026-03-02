import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { BackToTop } from '../components/BackToTop';
import { products } from '../data/products';

// Remove accents and convert to lowercase for case-insensitive, accent-insensitive search
const normalizeString = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

export function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'queijos' | 'doces' | 'combos'>('all');

  const filteredAndSortedProducts = products
    .filter((product) => {
      const normalizedQuery = normalizeString(searchQuery);
      const matchesSearch = normalizeString(product.name).includes(normalizedQuery) ||
                           normalizeString(product.description).includes(normalizedQuery) ||
                           normalizeString(product.detailedDescription).includes(normalizedQuery) ||
                           product.ingredients.some(ing => normalizeString(ing).includes(normalizedQuery)) ||
                           product.benefits.some(ben => normalizeString(ben).includes(normalizedQuery));
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return (
    <div className="min-h-screen pt-32 pb-16">
      <SEO 
        title="Produtos" 
        description="Explore nossa linha completa de queijos e doces artesanais. Produtos frescos e naturais, feitos com amor."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#6B4A2D] hover:underline">Início</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Produtos</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 text-lg">
            Explore nossa linha completa de queijos e doces artesanais
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#F4F1EC] rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal size={20} className="text-gray-600" />
            <h2 className="text-lg">Filtros e Busca</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4A2D] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as 'all' | 'queijos' | 'doces' | 'combos')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4A2D] focus:border-transparent"
            >
              <option value="all">Todas as Categorias</option>
              <option value="queijos">Queijos</option>
              <option value="doces">Doces</option>
              <option value="combos">Combos</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">Nenhum produto encontrado</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="text-[#6B4A2D] hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
      <BackToTop />
    </div>
  );
}
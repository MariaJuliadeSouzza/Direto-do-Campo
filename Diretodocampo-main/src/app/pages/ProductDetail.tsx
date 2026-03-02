import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { MessageCircle, Check, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getProductById, getRelatedProducts } from '../data/products';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Navigate to="/produtos" replace />;
  }

  const relatedProducts = getRelatedProducts(product.id);
  const images = product.images || [product.image];
  const whatsappMessage = `Oi, gostaria de encomendar: ${product.name}`;
  const whatsappUrl = `https://wa.me/5544999763686?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen pt-32 pb-16">
      <SEO 
        title={product.name} 
        description={product.description}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#6B4A2D] hover:underline">Início</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/produtos" className="text-[#6B4A2D] hover:underline">Produtos</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 text-[#6B4A2D] hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Voltar para Produtos
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#6B4A2D]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block text-xs uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl text-[#2F1F16] mb-4">
              {product.name}
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              {product.detailedDescription}
            </p>

            <div className="bg-[#F4F1EC] rounded-lg p-6 mb-6 border border-[#D8C7A3]">
              <p className="text-[#5F5F5F] text-sm font-medium">Produto artesanal | Consulte preço via WhatsApp</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#6F7F52] text-white px-8 py-4 rounded-lg hover:bg-[#5C6A45] transition-colors text-lg mb-8"
            >
              <MessageCircle size={24} />
              Encomendar via WhatsApp
            </a>

            {/* Benefits */}
            <div>
              <h2 className="text-xl text-gray-900 mb-3">Por que escolher?</h2>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <Check className="text-[#6F7F52] mt-0.5 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl text-gray-900 mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
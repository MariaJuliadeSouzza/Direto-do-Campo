import { Link } from 'react-router-dom';
import { Heart, Leaf, Award, Star } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <SEO 
        title="Sobre Nós" 
        description="Conheça a história da Direto do Campo. Produzimos queijos e doces artesanais com amor e qualidade."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#6B4A2D] hover:underline">Início</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Sobre Nós</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Nossa História
          </h1>
          <p className="text-xl text-[#2F1F16] italic">
            Direto do Campo para sua casa!
          </p>
        </div>

        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={new URL('../../imagens/NeiaFoto.jpg', import.meta.url).href}
              alt="Nossa fazenda"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl text-gray-900 mb-6">
              Quem Somos
            </h2>
            <p className="text-gray-700 mb-4">
              A Direto do Campo é feita com amor pela Claudineia Elias e sua família. Ela vive em uma linda fazenda com seu marido e seus três filhos, onde tudo começou.
            </p>
            <p className="text-gray-700 mb-4">
              Todos os ingredientes vêm da própria fazenda. As frutas e verduras são colhidas sem agrotóxicos, com muito cuidado e atenção. Tudo é feito com as mãos, com a dedicação que Deus coloca no coração de quem ama o que faz.
            </p>
            <p className="text-gray-700">
              Aqui na fazenda, o respeito pela natureza e pela vida é tudo. Cada produto que sai da nossa cozinha carrega esse amor e essa benção. Queremos que você sinta, em cada mordida, o carinho que colocamos em tudo que fazemos.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#F9F7F2] rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-gray-700 text-lg">
              Fazer alimentos artesanais com qualidade e carinho, respeitando a natureza e 
              agradecendo a Deus por tudo o que Ele nos permite produzir. 
              Queremos levar sabor simples, caseiro e verdadeiro para a mesa das famílias.
            </p>
          </div>
        </section>
        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Conheça Nossos Produtos!
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experimente a qualidade e o sabor autêntico dos nossos queijos e doces artesanais. 
            Faça seu pedido pelo WhatsApp e receba em casa!
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#6F7F52] text-white px-8 py-4 rounded-lg hover:bg-[#5C6A45] transition-colors text-lg"
          >
            Ver Produtos
          </Link>
        </section>
      </div>
    </div>
  );
}
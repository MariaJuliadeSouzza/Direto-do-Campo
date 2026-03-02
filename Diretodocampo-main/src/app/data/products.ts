export interface Product {
  id: string;
  name: string;
  category: 'queijos' | 'doces' | 'combos';
  description: string;
  detailedDescription: string;
  image: string;
  images?: string[];
  ingredients: string[];
  benefits: string[];
}

export const products: Product[] = [
  // UMA LINHA
  {
    id: '1',
    name: 'Doce de Mamão Verde',
    category: 'doces',
    description: 'Doce de mamão verde disponível cristalizado e/ou ralado.',
    detailedDescription: 'Doce tradicional feito com mamões verdes selecionados, apresentando opções de apresentação cristalizado para aqueles que preferem uma textura mais crocante, ou ralado para uma consistência mais suave. Produzido de forma artesanal, mantendo todo o aroma e sabor autêntico da fruta.',
    image: new URL('../../imagens/DoceMamaoVerde3.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/DoceMamaoVerde3.jpg', import.meta.url).href,
      new URL('../../imagens/DoceMamaoVerdeRalado.jpg', import.meta.url).href,
      new URL('../../imagens/DoceMamaoVerdeCristalizado.jpg', import.meta.url).href,
    ],
    ingredients: ['Mamão verde', 'Açúcar mascavo', 'Gengibre', 'Canela', 'Cravo'],
    benefits: ['Frutas frescas;', 'Múltiplas opções de apresentação;', 'Sem aditivos;', 'Tradicional;', 'Artesanal.'],
  },
  {
    id: '2',
    name: 'Doce de Mamão',
    category: 'doces',
    description: 'Doce de mamão com opção cristalizada, sabor autêntico e textura refinada.',
    detailedDescription: 'Preparado com mamões selecionados e cozidos no ponto perfeito, este doce oferece a opção cristalizada para uma apresentação especial e textura refinada. Rico em sabor autêntico, é perfeito para acompanhar queijos ou consumir puro.',
    image: new URL('../../imagens/DoceMamao.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/DoceMamao.jpg', import.meta.url).href,
      new URL('../../imagens/Docede mamao2.jpg', import.meta.url).href,
    ],
    ingredients: ['Mamão maduro', 'Açúcar', 'Limão', 'Especiarias'],
    benefits: ['Frutas frescas;', 'Opção cristalizada;', 'Sem aditivos;', 'Tradicional;', 'Artesanal.'],
  },
  {
    id: '3',
    name: 'Doce de Leite Cremoso',
    category: 'doces',
    description: 'Doce de leite caseiro de textura cremosa perfeita, também disponivel a versão talhada.',
    detailedDescription: 'Nosso Doce de Leite é preparado artesanalmente com leite fresco da fazenda e açúcar mascavo. Cozido lentamente em tachos de cobre, resulta em uma textura cremosa e sabor inconfundível que remete à infância. Também disponível na versão talhada, para quem prefere uma textura mais firme e rústica. Perfeito para acompanhar queijos ou ser consumido puro como sobremesa.',
    image: new URL('../../imagens/DocedeLeite.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/DocedeLeite.jpg', import.meta.url).href,
      new URL('../../imagens/DocedeLeite2.jpg', import.meta.url).href,
      new URL('../../imagens/DocedeLeiteTalhado.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Açúcar mascavo', 'Calda de leite doce', 'Varinha de baunilha'],
    benefits: ['100% natural;', 'Sem corantes;', 'Receita tradicional;', 'Textura perfeita;', 'Artesanal.'],
  },
  {
    id: '4',
    name: 'Requeijão de Corte',
    category: 'queijos',
    description: 'Requeijão artesanal de corte, textura firme e cremosa.',
    detailedDescription: 'Requeijão produzido artesanalmente, com consistência ideal para ser cortado em pedaços. Seu sabor suave e cremoso o tornam perfeito para acompanhar pães, biscoitos ou ser utilizado em receitas.',
    image: new URL('../../imagens/RequeijaodeCorte.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/RequeijaodeCorte.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaodeCorte2.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Nata', 'Sal', 'Fermentos naturais'],
    benefits: ['Textura ideal para corte;', 'Cremoso;', 'Artesanal;', 'Versátil;', 'Sabor suave.'],
  },
  {
    id: '5',
    name: 'Queijo de Açafrão',
    category: 'queijos',
    description: 'Queijo artesanal temperado com açafrão, aroma e sabor únicos.',
    detailedDescription: 'Queijo produzido artesanalmente e temperado com açafrão, trazendo um aroma e sabor únicos e sofisticados. Perfeito para quem aprecia sabores diferenciados e receitas especiais.',
    image: new URL('../../imagens/QueijoAçafrão.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoAçafrão.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Açafrão', 'Sal', 'Fermentos naturais'],
    benefits: ['Sabor único;', 'Aroma sofisticado;', 'Artesanal;', 'Diferenciado;', 'Premium.'],
  },
  {
    id: '6',
    name: 'Queijo de Orégano',
    category: 'queijos',
    description: 'Queijo artesanal temperado com orégano, sabor herbáceo marcante.',
    detailedDescription: 'Queijo de qualidade superior temperado com orégano fresco, desenvolvendo um sabor herbáceo marcante e aromático. Ideal para acompanhamentos especiais e receitas mediterrâneas.',
    image: new URL('../../imagens/QueijoOregano.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoOregano.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Orégano fresco', 'Sal', 'Fermentos naturais'],
    benefits: ['Sabor herbáceo;', 'Aroma marcante;', 'Artesanal;', 'Versátil;', 'Ideal para receitas.'],
  },
  {
    id: '7',
    name: 'Queijo Temperado com Pimenta Rosa',
    category: 'queijos',
    description: 'Queijo artesanal temperado com pimenta rosa, sabor sofisticado.',
    detailedDescription: 'Queijo artesanal finamente temperado com pimenta rosa, trazendo um sabor sofisticado e ligeiramente picante. Um produto diferenciado e gourmet para apreciadores de sabores refinados.',
    image: new URL('../../imagens/QueijoTemperadoPimentaRosa.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoTemperadoPimentaRosa.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Pimenta rosa', 'Sal', 'Fermentos naturais'],
    benefits: ['Sabor sofisticado;', 'Ligeiramente picante;', 'Gourmet;', 'Artesanal;', 'Premium.'],
  },
  {
    id: '8',
    name: 'Romeu e Julieta',
    category: 'queijos',
    description: 'Queijos cortados com goiabada, a clássica combinação brasileira.',
    detailedDescription: 'Nossos queijos artesanais cortados e servidos com goiabada artesanal, formando a clássica e irresistível combinação Romeu e Julieta. Uma tradição brasileira que agrada a todos os paladares.',
    image: new URL('../../imagens/RomeueJulieta.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/RomeueJulieta.jpg', import.meta.url).href,
    ],
    ingredients: ['Queijo artesanal', 'Goiabada artesanal', 'Sal', 'Fermentos naturais'],
    benefits: ['Tradição brasileira;', 'Harmonia perfeita;', 'Combinação clássica;', 'Artesanal;', 'Irresistível.'],
  },
  {
    id: '9',
    name: 'Queijo Ralado',
    category: 'queijos',
    description: 'Queijo artesanal ralado, pronto para usar em qualquer receita.',
    detailedDescription: 'Queijo artesanal de qualidade ralado mecanicamente, mantendo suas características com a comodidade de estar pronto para usar. Perfeito para massas, saladas, sopas e outros pratos da culinária do dia a dia.',
    image: new URL('../../imagens/QueijoRalado.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoRalado.jpg', import.meta.url).href,
    ],
    ingredients: ['Queijo artesanal', 'Sal'],
    benefits: ['Pronto para usar;', 'Versátil;', 'Qualidade artesanal;', 'Conservação adequada;', 'Sabor autêntico.'],
  },
  {
    id: '10',
    name: 'Queijo Mussarela',
    category: 'queijos',
    description: 'Queijo mussarela artesanal, textura macia e sabor suave.',
    detailedDescription: 'Mussarela produzida artesanalmente com leite fresco, garantindo máxima frescura e sabor autêntico. Ideal para caprese, pizzas, saladas e qualquer receita que necessite de um queijo de textura macia.',
    image: new URL('../../imagens/QueijoMussarela.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoMussarela.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral fresco', 'Sal', 'Fermentos naturais'],
    benefits: ['Produzida diariamente;', 'Máximo frescor;', 'Textura macia;', 'Versátil;', 'Sabor suave.'],
  },
  {
    id: '11',
    name: 'Queijo Coalho',
    category: 'queijos',
    description: 'Queijo coalho artesanal tradicional, textura firme e sabor marcante.',
    detailedDescription: 'Queijo coalho produzido de forma totalmente artesanal seguindo receitas tradicionais. Com a consistência firme característica e sabor marcante, é perfeito para grelhar ou servir em tábuas de queijos.',
    image: new URL('../../imagens/QueijoCoalho.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoCoalho.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Sal', 'Coalho tradicional', 'Fermentos naturais'],
    benefits: ['Tradicional;', 'Totalmente artesanal;', 'Textura firme;', 'Versátil;', 'Sabor marcante.'],
  },
  {
    id: '12',
    name: 'Queijo Fresco',
    category: 'queijos',
    description: 'Queijo fresco artesanal, textura suave e sabor delicado.',
    detailedDescription: 'Queijo fresco produzido diariamente com leite fresco, oferecendo máxima frescura e uma textura suave característica. Ideal para acompanhar frutas, mel, geleias e receitas leves.',
    image: new URL('../../imagens/Queijofresco.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/Queijofresco.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral fresco', 'Sal', 'Fermentos naturais'],
    benefits: ['Produzido diariamente;', 'Máximo frescor;', 'Textura suave;', 'Sabor delicado;', 'Versátil.'],
  },
  {
    id: '13',
    name: 'Queijo Curado',
    category: 'queijos',
    description: 'Queijo curado artesanal, sabor profundo e complexo.',
    detailedDescription: 'Queijo curado em nossa queijaria artesanal, desenvolvendo um sabor profundo, complexo e marcante. A maturação adequada resulta em uma textura firme e cristalizada, perfeita para apreciadores de queijos refinados.',
    image: new URL('../../imagens/QueijoCurado.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoCurado.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Sal', 'Fermentos naturais', 'Tempo de cura'],
    benefits: ['Curado artesanalmente;', 'Sabor profundo;', 'Textura firme;', 'Cristalizado;', 'Gourmet.'],
  },
  {
    id: '14',
    name: 'Queijo Apimentado',
    category: 'queijos',
    description: 'Queijo artesanal levemente apimentado, aroma e picância equilibrados.',
    detailedDescription: 'Queijo temperado com blend de pimentas que proporciona uma picância equilibrada sem sobrepor o sabor do leite. Ideal para quem aprecia queijos com personalidade e toque picante.',
    image: new URL('../../imagens/QueijoApimentado.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoApimentado.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Blend de pimentas', 'Sal', 'Fermentos naturais'],
    benefits: ['Picância equilibrada;', 'Sabor marcante;', 'Artesanal;', 'Ótimo para tábuas.'],
  },
  
  // DUAS LINHAS
  {
    id: '15',
    name: 'Queijo Recheado com Goiabada',
    category: 'queijos',
    description: 'Queijo artesanal recheado com goiabada tradicional.',
    detailedDescription: 'Queijo de primeira qualidade recheado com nossa goiabada artesanal, criando a perfeita combinação Romeu e Julieta. Uma harmonização clássica da culinária brasileira, com toda a qualidade e tradição Direto do Campo.',
    image: new URL('../../imagens/QueijoRGoiaba.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoRGoiaba.jpg', import.meta.url).href,
      new URL('../../imagens/QueijoRGoiabada.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Goiabada artesanal', 'Sal', 'Fermentos naturais'],
    benefits: ['Harmonia de sabores;', 'Tradição brasileira;', 'Artesanal;', 'Fonte de cálcio;', 'Produção sustentável.'],
  },
  {
    id: '16',
    name: 'Queijo Recheado com Nutela',
    category: 'queijos',
    description: 'Queijo artesanal recheado com Nutela, combinação irresistível.',
    detailedDescription: 'Uma criação inovadora que combina nosso queijo artesanal com Nutela, criando uma experiência única de sabores. Perfeito para quem busca uma opção diferenciada e deliciosa.',
    image: new URL('../../imagens/QueijoRNutella.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoRNutella.jpg', import.meta.url).href,
      new URL('../../imagens/QueijoRNutella2.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Nutela', 'Sal', 'Fermentos naturais'],
    benefits: ['Combinação inovadora;', 'Sabor único;', 'Artesanal;', 'Diferenciado;', 'Irresistível.'],
  },
  {
    id: '17',
    name: 'Queijo Recheado com Doce de Leite',
    category: 'queijos',
    description: 'Queijo artesanal recheado com nosso doce de leite cremoso.',
    detailedDescription: 'A perfeita união entre o queijo artesanal Direto do Campo e nosso doce de leite cremoso caseiro. Uma combinação clássica que agrada a todos os paladares, doce e salgado em harmonia perfeita.',
    image: new URL('../../imagens/QueijoRDocedeLeite.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoRDocedeLeite.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Doce de leite caseiro', 'Sal', 'Fermentos naturais'],
    benefits: ['Harmonia de sabores;', 'Tradicional;', 'Artesanal;', 'Combinação clássica;', 'Irresistível.'],
  },
  {
    id: '18',
    name: 'Mini Queijos Recheados com Geleia',
    category: 'queijos',
    description: 'Mini queijos artesanais recheados com geleia, opções variadas.',
    detailedDescription: 'Mini queijos artesanais recheados com opções de geleia de morango, uva, marrom glacê ou goiabada. Perfeitos para tábuas de queijos, aperitivos ou presentes especiais. Cada um é uma explosão de sabor.',
    image: new URL('../../imagens/MiniQueijinhos.jpeg', import.meta.url).href,
    images: [
      new URL('../../imagens/MiniQueijoGeleia.jpg', import.meta.url).href,
      new URL('../../imagens/MiniQueijoGeleia2.jpg', import.meta.url).href,
      new URL('../../imagens/MiniQueijoGeleia3.jpg', import.meta.url).href,
      new URL('../../imagens/MiniQueijoGoiabada.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Geleia artesanal variada', 'Sal', 'Fermentos naturais'],
    benefits: ['Múltiplas opções de geleia;', 'Tamanho ideal para aperitivos;', 'Artesanal;', 'Versátil;', 'Apresentação especial.'],
  },
  {
    id: '19',
    name: 'Enroladinhos da Vovó de Mamão Verde',
    category: 'doces',
    description: 'Docinhos enrolados de mamão verde, receita tradicional da vovó.',
    detailedDescription: 'Enroladinhos tradicionais feitos com mamão verde seguindo a receita clássica. Pequenos, deliciosos e preparados com todo amor e cuidado, trazendo a nostalgia das guloseimas caseiras feitas com carinho.',
    image: new URL('../../imagens/enroladinhosdavovo.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/enroladinhosdavovo.jpg', import.meta.url).href,
    ],
    ingredients: ['Mamão verde', 'Açúcar', 'Gengibre ralado', 'Especiarias'],
    benefits: ['Receita tradicional;', 'Caseiro;', 'Artesanal;', 'Sem aditivos;', 'Nostálgico.'],
  },
  {
    id: '20',
    name: 'Requeijão Cremoso (também disponível com Orégano)',
    category: 'queijos',
    description: 'Requeijão cremoso artesanal. Também disponível na versão com orégano.',
    detailedDescription: 'Requeijão cremoso produzido com leite fresco, textura macia e espalhabilidade ideal. Disponível na versão tradicional e na versão temperada com orégano para um toque herbáceo. Perfeito para pães, torradas e receitas.',
    image: new URL('../../imagens/RequeijaoCremosoMelhorFoto.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/RequeijaoCremosoMelhorFoto.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaoCremosoOregano.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaoCremosoOregano2.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaoCremosoTradicional.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaoCremoso.jpg', import.meta.url).href,
      new URL('../../imagens/RequeijaoCremoso2.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Nata', 'Sal', 'Orégano (opcional)'],
    benefits: ['Cremoso e espalhável;', 'Versão com orégano disponível;', 'Artesanal;', 'Versátil para receitas.'],
  },
  {
    id: '21',
    name: 'Queijo Recheado com Milho e Linguiça Calabresa',
    category: 'queijos',
    description: 'Queijo recheado com milho e linguiça calabresa, sabor rústico e suculento.',
    detailedDescription: 'Queijo artesanal generoso, recheado com milho doce e linguiça calabresa defumada, combinando textura e sabor. Excelente para sanduíches, tábuas e petiscos.',
    image: new URL('../../imagens/QueijoMilhoeCalabresa.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/QueijoMilhoeCalabresa.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Milho', 'Linguiça calabresa', 'Sal', 'Fermentos naturais'],
    benefits: ['Sabor rústico;', 'Recheio suculento;', 'Artesanal;', 'Perfeito para petiscos.'],
  },
  {
    id: '22',
    name: 'Combo Queijo: Azeitona, Vinagrete e Orégano',
    category: 'combos',
    description: 'Combo de queijos recheados com azeitona; vinagrete; e orégano.',
    detailedDescription: 'Três opções de recheio para harmonizar com pães e saladas: azeitona picada para um toque salgado, vinagrete caseiro para acidez equilibrada, e orégano para sabor herbal. Combinação pensada para agradar diferentes paladares.',
    image: new URL('../../imagens/ComboQueijoAzeitonaVinagreteOregano.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/ComboQueijoAzeitonaVinagreteOregano.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Azeitona', 'Tomate', 'Cebola', 'Vinagre', 'Orégano', 'Sal'],
    benefits: ['Sabores equilibrados;', 'Perfeito para acompanhar saladas;', 'Artesanal;', 'Opções para todos os gostos.'],
  },
  {
    id: '23',
    name: 'Combo Queijo: Brigadeiro e Nutella',
    category: 'combos',
    description: 'Combo doce-salgado: queijos recheados com brigadeiro e com Nutella.',
    detailedDescription: 'Uma proposta doce e indulgente: um queijo recheado com brigadeiro cremoso e outro com Nutella, pensado para sobremesas criativas e combinações surpreendentes. Ideal para eventos e paladares que gostam de experimentar.',
    image: new URL('../../imagens/ComboRQueijoBrigadeiroeNutella.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/ComboRQueijoBrigadeiroeNutella.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Brigadeiro', 'Nutella', 'Sal'],
    benefits: ['Combinação doce-salgada;', 'Perfeito para sobremesas;', 'Artesanal;', 'Diferenciado.'],
  },

  // TRÊS LINHAS
  {
    id: '24',
    name: 'Combo Queijo: Pimenta Calabresa, Milho com Linguiça Calabresa e Orégano',
    category: 'combos',
    description: 'Combo de queijos recheados: pimenta calabresa; milho com linguiça calabresa; e orégano.',
    detailedDescription: 'Seleção especial de queijos recheados pronta para degustação: um com pimenta calabresa para quem gosta de picância; outro com milho e linguiça calabresa, saboroso e suculento; e um temperado com orégano para refrescar o paladar. Ideal para tábuas e eventos.',
    image: new URL('../../imagens/PimentaCalabresaMilhocomLinguiçaCalabresaOregano.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/PimentaCalabresaMilhocomLinguiçaCalabresaOregano.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Pimenta calabresa', 'Milho', 'Linguiça calabresa', 'Orégano', 'Sal'],
    benefits: ['Variedade de sabores;', 'Perfeito para tábuas;', 'Artesanal;', 'Ideal para eventos.'],
  },
  {
    id: '25',
    name: 'Combo Queijo Tradicional e Pimentão Desidratado com Alho e Salsa',
    category: 'combos',
    description: 'Combo com queijo tradicional e queijo com pimentão desidratado, alho e salsa.',
    detailedDescription: 'Inclui um queijo tradicional de boa maturação e outro temperado com pimentão desidratado, alho e salsa, oferecendo aroma e sabor mediterrâneo com um toque rústico. Excelente para quem aprecia sabores intensos e texturas variadas.',
    image: new URL('../../imagens/ComboQueijoTradicionalePimentaoDesidatradocomalhoesalsalsa.jpg', import.meta.url).href,
    images: [
      new URL('../../imagens/ComboQueijoTradicionalePimentaoDesidatradocomalhoesalsalsa.jpg', import.meta.url).href,
    ],
    ingredients: ['Leite integral', 'Pimentão desidratado', 'Alho', 'Salsa', 'Sal', 'Fermentos naturais'],
    benefits: ['Sabor intenso;', 'Aroma marcante;', 'Artesanal;', 'Perfeito para petiscos.'],
  },
];

export const getFeaturedProducts = () => products.slice(0, 6);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (category: 'queijos' | 'doces' | 'combos' | 'all') => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (productId: string, limit = 3) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};

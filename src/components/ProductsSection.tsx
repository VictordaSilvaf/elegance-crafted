import { Button } from "@/components/ui/button";
import braceletImg from "@/assets/product-bracelet.jpg";
import earringsImg from "@/assets/product-earrings.jpg";
import necklaceImg from "@/assets/product-necklace.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
  {
    id: 1,
    name: "Pulseira Elegance",
    description: "Design delicado com corrente dourada",
    image: braceletImg,
    tag: "Mais vendido",
  },
  {
    id: 2,
    name: "Brincos Crystal",
    description: "Pedrarias sofisticadas com detalhes em ouro",
    image: earringsImg,
    tag: "Novo",
  },
  {
    id: 3,
    name: "Colar Charm",
    description: "Pingente delicado para o dia a dia",
    image: necklaceImg,
    tag: "Destaque",
  },
];

const modules = [
  {
    title: "Introdução e boas-vindas",
    category: "Intro",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/intro.png",
  },
  {
    title: "Peças que vendem o ano todo",
    category: "Módulo 01",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-1.png",
  },
  {
    title: "Atendimento de excelência",
    category: "Módulo 02",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-2.png",
  },
  {
    title: "Como montar um espelho de feed",
    category: "Módulo 03",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-3.png",
  },
  {
    title: "Stories que vendem",
    category: "Módulo 04",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-4.png",
  },
  {
    title: "Copy e persuasão para vendas",
    category: "Módulo 05",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-5.png",
  },
  {
    title: "Estratégias de engajamento",
    category: "Módulo 06",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-6.png",
  },
  {
    title: "Planejamento de conteúdo",
    category: "Módulo 07",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-7.png",
  },
  {
    title: "Fotografia para Instagram",
    category: "Módulo 08",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-8.png",
  },
  {
    title: "Edição e identidade visual",
    category: "Módulo 09",
    image: "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-9.png",
  },
  {
    title: "Gestão de mídias sociais",
    category: "Módulo 10",
    image:
      "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-10.png",
  },
  {
    title: "Automação de vendas",
    category: "Módulo 11",
    image:
      "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-11.png",
  },
  {
    title: "Funis de marketing",
    category: "Módulo 12",
    image:
      "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-12.png",
  },
  {
    title: "Análise de métricas",
    category: "Módulo 13",
    image:
      "https://luanamacedo.com.br/wp-content/uploads/2024/06/modulo-13.png",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Módulos exclusivos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Módulos que você terá <span className="text-accent">acesso:</span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {modules.map((module, index) => (
            <SwiperSlide key={module.title}>
              <div className="group select-none relative overflow-hidden rounded-2xl bg-dark-lighter border border-border/20 aspect-[3/4] flex flex-col justify-end transition-all duration-300 hover:border-primary/50">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Products Grid */}
        {/* <div className="text-center my-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Destaques da <span className="text-primary">coleção</span>
          </h3>
        </div> */}

        {/* <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-2"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {product.tag}
                </span>
              </div>

              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <Button variant="default" className="w-full">
                  Comprar Agora
                </Button>
              </div>
            </div>
          ))}
        </div> */}

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() =>
              (window.location.href =
                "https://pay.kiwify.com.br/CqH4vCT?afid=5dbZmjeW")
            }
            variant="hero"
            size="lg"
          >
            Quero Ter Acesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

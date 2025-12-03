import { Button } from "@/components/ui/button";
import braceletImg from "@/assets/product-bracelet.jpg";
import earringsImg from "@/assets/product-earrings.jpg";
import necklaceImg from "@/assets/product-necklace.jpg";

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
  { title: "Peças que vendem o ano todo", category: "Módulo 01" },
  { title: "Atendimento de excelência", category: "Módulo 02" },
  { title: "Como montar um espelho de feed", category: "Módulo 03" },
  { title: "Stories que vendem", category: "Módulo 04" },
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

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group relative overflow-hidden rounded-2xl bg-dark-lighter border border-border/20 aspect-[3/4] flex flex-col justify-end p-6 transition-all duration-300 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-10" />
              <div className="relative z-20">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {module.category}
                </span>
                <h3 className="text-lg font-bold text-secondary-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                  {module.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Destaques da <span className="text-primary">coleção</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-2"
            >
              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
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
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Quero Ter Acesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

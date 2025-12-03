import { TrendingUp, Star, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente suas vendas",
    description:
      "Descubra métodos testados e comprovados para impulsionar suas vendas e alcançar um crescimento acelerado do seu negócio.",
  },
  {
    icon: Star,
    title: "Acessórios de qualidade",
    description:
      "Tenha acesso a fornecedores confiáveis e exclusivos que oferecem produtos de alta qualidade a preços acessíveis.",
  },
  {
    icon: Lightbulb,
    title: "Aprenda a combinar",
    description:
      "Adquira conhecimentos práticos valiosos sobre estilo e tendência para ajudar seus clientes a montar looks perfeitos.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background" id="benefits">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Com a plataforma{" "}
            <span className="text-primary">Vivendo de Acessórios</span> você
            poderá:
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-card hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mulher elegante usando acessórios dourados"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Plataforma Vivendo de Acessórios</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Transforme seu estilo com{" "}
            <span className="text-primary">acessórios</span> que fazem a{" "}
            <span className="text-accent">diferença</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up stagger-2">
            Descubra pulseiras, colares e brincos que vão elevar seu look. Aprenda a alavancar suas vendas com os melhores fornecedores do mercado.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button variant="hero" size="xl">
              Quero Ter Acesso
            </Button>
            <Button variant="dark" size="xl">
              Saiba Mais
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border/20 animate-fade-up stagger-4">
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">+500</span>
              <span className="text-sm text-muted-foreground">Alunas</span>
            </div>
            <div className="w-px h-10 bg-border/30" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">98%</span>
              <span className="text-sm text-muted-foreground">Satisfação</span>
            </div>
            <div className="w-px h-10 bg-border/30" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent">7 dias</span>
              <span className="text-sm text-muted-foreground">Garantia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

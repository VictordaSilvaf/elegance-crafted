import { Button } from "@/components/ui/button";
import { Check, CreditCard, Shield, Zap } from "lucide-react";

const features = [
  "Acesso imediato a todos os módulos",
  "Fornecedores exclusivos verificados",
  "Grupo VIP no WhatsApp",
  "Atualizações constantes",
  "Suporte prioritário",
  "Certificado de conclusão",
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_70%)]" />

      <div className="container relative z-10">
        {/* Pre-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-foreground leading-relaxed">
            Não perca mais tempo e dinheiro com cursos que não trazem resultados para o seu negócio.
            Aqui na plataforma <span className="text-primary font-semibold">Vivendo de Acessórios</span>, 
            além de receber o direcionamento correto para impulsionar suas vendas, você terá acesso 
            aos melhores fornecedores de acessórios do mercado.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-secondary rounded-3xl p-8 md:p-12 border border-primary/30 shadow-2xl">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-glow">
                <Zap className="w-4 h-4" />
                OFERTA EXCLUSIVA
              </span>
            </div>

            <div className="text-center pt-6">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
                A plataforma <span className="text-primary">VIVENDO DE ACESSÓRIOS</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                é o caminho para levar seu negócio ao próximo nível.
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-secondary-foreground">12x</span>
                  <span className="text-5xl md:text-6xl font-bold text-primary">R$29,82</span>
                </div>
                <p className="text-muted-foreground">
                  ou à vista <span className="text-accent font-bold text-lg">R$297,00</span>
                </p>
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full mb-8">
                Quero Ter Acesso
              </Button>

              {/* Payment methods */}
              <div className="flex items-center justify-center gap-4 mb-8 pb-8 border-b border-border/30">
                <CreditCard className="w-10 h-10 text-muted-foreground" />
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-muted rounded text-xs font-semibold text-muted-foreground">VISA</div>
                  <div className="px-3 py-1 bg-muted rounded text-xs font-semibold text-muted-foreground">MASTERCARD</div>
                  <div className="px-3 py-1 bg-muted rounded text-xs font-semibold text-muted-foreground">PIX</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-secondary-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security badge */}
            <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border/30">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Compra 100% segura • Ambiente criptografado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Guarantee Badge */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-gold">
              <div className="text-center">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-accent-foreground mx-auto mb-1" />
                <span className="block text-3xl md:text-4xl font-bold text-accent-foreground">7</span>
                <span className="text-xs md:text-sm font-semibold text-accent-foreground uppercase">Dias</span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-accent/30 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Garantia Incondicional de <span className="text-accent">7 Dias</span>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Se dentro de 7 dias você perceber que o conteúdo não é para você, 
            basta enviar um e-mail solicitando o reembolso. Devolvemos 100% do seu 
            investimento, sem perguntas e sem burocracia. Você não tem nada a perder!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

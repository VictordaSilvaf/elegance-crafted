import mentorPhoto from "@/assets/mentor-photo.jpg";

const MentorSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={mentorPhoto}
                alt="Luana Macedo - Mentora de acessórios"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre a mentora
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Eu sou <span className="text-accent">Luana Macedo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mentora de vendas e especialista em negócios de acessórios desde 2017. 
                Já ajudei centenas de empreendedoras a transformarem suas vidas através 
                do mercado de semijoias, bijuterias, prata 925 e aço inox.
              </p>
              <p>
                Meu método comprovado já gerou mais de R$ 2 milhões em vendas para 
                minhas alunas. Hoje, compartilho todo meu conhecimento através de 
                mentorias e cursos especializados.
              </p>
              <p>
                Na plataforma Vivendo de Acessórios, além de receber o direcionamento 
                correto para impulsionar suas vendas, você terá acesso aos melhores 
                fornecedores de acessórios do mercado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/20">
              <div>
                <span className="block text-3xl font-bold text-primary">+7</span>
                <span className="text-sm text-muted-foreground">Anos de experiência</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">+500</span>
                <span className="text-sm text-muted-foreground">Alunas formadas</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary">R$2M+</span>
                <span className="text-sm text-muted-foreground">Em vendas geradas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;

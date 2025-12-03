import { Play, Quote, X } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Empreendedora",
    quote:
      "A plataforma mudou completamente meu negócio. Consegui triplicar minhas vendas em apenas 3 meses!",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/5Or5i1SkaZo",
  },
  {
    id: 2,
    name: "Ana Santos",
    role: "Lojista",
    quote:
      "Os fornecedores indicados são incríveis. Produtos de qualidade com preços que me permitem ter boa margem.",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/lhcYYJg-OGU",
  },
  {
    id: 4,
    name: "Juliana Costa",
    role: "Influenciadora",
    quote:
      "A mentoria me ensinou a criar conteúdo que realmente converte. Minhas seguidoras amam as indicações!",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/Cll5cFxJTw0",
  },
  {
    id: 5,
    name: "Joice Rodrigues",
    role: "Revendedora",
    quote:
      "Conteúdo claro e aplicável. Meu negócio está mais organizado e minhas vendas cresceram.",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/D48IZ9guwRg",
  },
];

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que os meus clientes e mentoradas{" "}
            <span className="text-primary">falam sobre mim:</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card hover:border-primary/30"
            >
              {/* Video Thumbnail Area */}
              {testimonial.hasVideo && (
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${testimonial.videoUrl
                      .split("/")
                      .pop()}/maxresdefault.jpg`}
                    alt={`Depoimento de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback para thumbnail de qualidade média se maxres não existir
                      e.currentTarget.src = `https://img.youtube.com/vi/${testimonial.videoUrl
                        .split("/")
                        .pop()}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(testimonial.videoUrl)}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-glow"
                    >
                      <Play
                        className="w-6 h-6 text-primary-foreground ml-1"
                        fill="currentColor"
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-4 text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <iframe
                src={selectedVideo}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

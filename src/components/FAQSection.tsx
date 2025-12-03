import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é a plataforma?",
    answer: "A plataforma é ideal para lojistas, revendedoras e empreendedoras que desejam aumentar suas vendas e ter acesso a fornecedores confiáveis de acessórios. Também é perfeita para quem quer iniciar um negócio do zero no mercado de semijoias, bijuterias e acessórios.",
  },
  {
    question: "O que são os fornecedores exclusivos indicados na plataforma?",
    answer: "São fornecedores cuidadosamente selecionados que oferecem produtos de qualidade com preços competitivos. Todos são verificados e testados por nossa equipe, garantindo segurança e qualidade nas suas compras.",
  },
  {
    question: "Como vou ter acesso?",
    answer: "Após a confirmação do pagamento, você receberá em seu e-mail as instruções de acesso à plataforma. O acesso é imediato para pagamentos via PIX e cartão de crédito.",
  },
  {
    question: "Por quanto tempo posso ter acesso à plataforma?",
    answer: "Você terá acesso por 1 ano completo à plataforma, incluindo todas as atualizações de conteúdo e novos fornecedores que forem adicionados durante esse período.",
  },
  {
    question: "As fornecedores são confiáveis e trabalham com peças de qualidade?",
    answer: "Sim! Todos os fornecedores passam por um rigoroso processo de verificação. Trabalhamos apenas com parceiros que oferecem produtos de qualidade, com bom acabamento e preços justos.",
  },
  {
    question: "Formas de pagamento?",
    answer: "Aceitamos cartão de crédito (em até 12x), PIX e boleto bancário. Todas as transações são processadas em ambiente seguro e criptografado.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Dúvidas frequentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Perguntas <span className="text-primary">Frequentes:</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tire suas dúvidas sobre a plataforma Vivendo de Acessórios. 
              Se não encontrar a resposta que procura, entre em contato conosco pelo WhatsApp.
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-dark-lighter rounded-xl border-none px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/30"
                >
                  <AccordionTrigger className="text-secondary-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

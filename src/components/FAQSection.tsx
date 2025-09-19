import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "Nossa consulta inicial tem duração de aproximadamente 60 minutos, incluindo análise capilar completa, diagnóstico personalizado e planejamento do tratamento ideal para você."
  },
  {
    question: "Os tratamentos são adequados para todos os tipos de cabelo?",
    answer: "Sim! Nossos profissionais são especializados em todos os tipos de cabelo. Fazemos uma análise detalhada para personalizar o tratamento de acordo com suas necessidades específicas."
  },
  {
    question: "Qual a duração dos resultados?",
    answer: "A duração varia conforme o tipo de tratamento. Hidratações duram 2-3 semanas, alisamentos de 3-6 meses, e colorações de 4-8 semanas. Oferecemos orientações para manutenção."
  },
  {
    question: "Posso fazer mais de um tratamento por sessão?",
    answer: "Dependendo do estado do seu cabelo, alguns tratamentos podem ser combinados. Nossa equipe avaliará a melhor sequência para garantir a saúde e beleza dos seus fios."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos 100% de garantia de satisfação. Se não ficar completamente satisfeito com o resultado, refazemos o procedimento sem custo adicional."
  },
  {
    question: "Preciso agendar com antecedência?",
    answer: "Sim, recomendamos agendamento com pelo menos 48h de antecedência. Para tratamentos mais complexos, sugerimos uma semana de antecedência."
  },
  {
    question: "Quais produtos vocês utilizam?",
    answer: "Trabalhamos apenas com produtos profissionais das melhores marcas do mercado, livres de sulfatos e parabenos, garantindo resultados excepcionais e segurança."
  },
  {
    question: "O desconto de 50% se aplica a todos os serviços?",
    answer: "O desconto de 50% é válido para a consulta inicial (de R$ 400 por R$ 200). Outros serviços têm valores específicos e podem ter promoções sazonais."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e serviços
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
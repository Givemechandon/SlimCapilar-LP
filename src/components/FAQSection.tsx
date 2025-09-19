import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é terapia capilar?",
    answer: "A terapia capilar é um conjunto de tratamentos personalizados que visam restaurar a saúde do couro cabeludo e fortalecer os fios, combatendo problemas como queda, caspa, seborreia, dermatite e até estágios iniciais da calvície."
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "Na primeira consulta, um especialista realiza uma avaliação completa do couro cabeludo e dos fios, utilizando equipamentos modernos para identificar a causa do problema e indicar o tratamento mais adequado para você."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas em geral é possível notar melhorias a partir do primeiro mês, especialmente em relação à diminuição da queda, fortalecimento dos fios e melhora da saúde do couro cabeludo."
  },
  {
    question: "A terapia capilar é indicada para qualquer pessoa?",
    answer: "Sim. Homens e mulheres de todas as idades podem se beneficiar dos tratamentos, desde que apresentem problemas relacionados ao couro cabeludo ou fios, como queda, oleosidade excessiva, caspa ou ressecamento."
  },
  {
    question: "Os tratamentos são dolorosos?",
    answer: "Não. Os procedimentos são minimamente invasivos, indolores e realizados de forma segura. Muitos pacientes descrevem as sessões como relaxantes."
  },
  {
    question: "Quais são as terapias capilares oferecidas na Slim Capilar?",
    answer: "Na Slim Capilar, oferecemos uma variedade de tratamentos personalizados, como: Tratamento para queda de cabelo (incluindo calvície e alopecia androgenética), Terapia para caspa e seborreia, Tratamentos para dermatite do couro cabeludo, Revitalização capilar com tecnologias avançadas. Cada terapia é adaptada às necessidades específicas do paciente para garantir os melhores resultados."
  },
  {
    question: "Onde fica localizada a Slim Capilar?",
    answer: "A clínica está localizada em R. Itália, 251 - Jardim Cica, Jundiaí - SP, em um espaço acolhedor e de fácil acesso. Após o agendamento, você receberá todas as informações detalhadas para sua visita."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e terapias capilares
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
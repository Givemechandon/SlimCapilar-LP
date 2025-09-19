import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Paula",
    location: "Jundiaí - SP",
    text: "Excelente atendimento! Profissionais muito capacitados e tratamento eficaz para meu problema de queda de cabelo.",
    rating: 5
  },
  {
    name: "Carlos Silva",
    location: "Campinas - SP", 
    text: "Resolveu meu problema de caspa que me incomodava há anos. Recomendo a todos!",
    rating: 5
  },
  {
    name: "Mariana Costa",
    location: "São Paulo - SP",
    text: "Tratamento para dermatite foi excelente. Equipe muito profissional e resultados surpreendentes.",
    rating: 5
  },
  {
    name: "Roberto Santos",
    location: "Jundiaí - SP",
    text: "Calvície estava me incomodando muito. O tratamento aqui me devolveu a autoestima!",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    location: "Indaiatuba - SP",
    text: "Clínica moderna com equipamentos de última geração. Resultados visíveis desde o primeiro mês!",
    rating: 5
  },
  {
    name: "João Oliveira",
    location: "Várzea Paulista - SP",
    text: "Profissionais muito qualificados e atendimento personalizado. Meus cabelos nunca estiveram tão saudáveis!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira os depoimentos de quem já transformou sua autoestima na Slim Capilar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Baseado em avaliações reais do Google</p>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-2xl font-bold text-primary">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">⭐</span>
              ))}
            </div>
            <span className="text-muted-foreground">(150+ avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
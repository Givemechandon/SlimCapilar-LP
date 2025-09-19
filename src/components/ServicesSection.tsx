import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Tratamento Capilar",
    description: "Hidratação profunda para cabelos danificados e ressecados",
    price: "A partir de R$ 150",
    features: ["Análise capilar completa", "Produtos premium", "Resultado imediato"]
  },
  {
    title: "Corte & Styling",
    description: "Cortes modernos e estilização profissional",
    price: "A partir de R$ 80",
    features: ["Consultoria de estilo", "Técnicas avançadas", "Finalização profissional"]
  },
  {
    title: "Coloração",
    description: "Coloração e mechas com produtos de alta qualidade",
    price: "A partir de R$ 200",
    features: ["Cores personalizadas", "Produtos sem amônia", "Proteção capilar"]
  },
  {
    title: "Alisamento",
    description: "Alisamentos duradouros e naturais",
    price: "A partir de R$ 300",
    features: ["Técnicas modernas", "Efeito natural", "Longa duração"]
  },
  {
    title: "Reconstrução",
    description: "Reconstrução completa para cabelos muito danificados",
    price: "A partir de R$ 250",
    features: ["Reconstrução profunda", "Fortalecimento", "Nutrição intensa"]
  },
  {
    title: "Extensões",
    description: "Alongamento e aumento de volume natural",
    price: "A partir de R$ 400",
    features: ["Cabelo natural", "Aplicação segura", "Resultado imediato"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos capilares com as melhores técnicas e produtos do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
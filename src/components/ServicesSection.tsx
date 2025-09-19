import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Tratamento para Queda de Cabelo",
    description: "Terapia especializada para calvície e alopecia androgenética",
    features: [
      "Análise tricológica completa",
      "Tecnologia avançada",
      "Tratamento personalizado",
    ],
  },
  {
    title: "Terapia para Caspa e Seborreia",
    description: "Tratamento médico para problemas do couro cabeludo",
    features: [
      "Diagnóstico especializado",
      "Protocolo médico",
      "Controle efetivo",
    ],
  },
  {
    title: "Tratamento para Dermatite",
    description: "Terapia especializada para dermatite do couro cabeludo",
    features: [
      "Avaliação dermatológica",
      "Tratamento anti-inflamatório",
      "Recuperação da saúde capilar",
    ],
  },
  {
    title: "Revitalização Capilar",
    description: "Tecnologias avançadas para revitalização dos fios",
    features: [
      "Equipamentos modernos",
      "Estimulação folicular",
      "Regeneração capilar",
    ],
  },
  {
    title: "Fortalecimento Capilar",
    description: "Tratamento intensivo para fortalecimento dos fios",
    features: [
      "Nutrição profunda",
      "Reconstrução capilar",
      "Prevenção da quebra",
    ],
  },
  {
    title: "Microinfusão de Medicamentos",
    description: "Aplicação direta de medicamentos no couro cabeludo",
    features: [
      "Técnica minimamente invasiva",
      "Absorção direcionada",
      "Resultados potencializados",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="procedimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Procedimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos procedimentos capilares especializadas com tecnologia
            avançada e acompanhamento médico personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-primary font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
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

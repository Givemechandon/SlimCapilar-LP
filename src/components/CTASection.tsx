import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-clinic.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recupere a Saúde dos seus Cabelos com{" "}
              <span className="text-primary">Tratamento Médico</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Na Slim Capilar, utilizamos protocolos médicos avançados para tratar problemas capilares 
              desde a raiz, oferecendo soluções eficazes e duradouras para sua autoestima.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mr-4 flex-shrink-0">✓</span>
                <span>Avaliação tricológica especializada</span>
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mr-4 flex-shrink-0">✓</span>
                <span>Tecnologia médica avançada</span>
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm mr-4 flex-shrink-0">✓</span>
                <span>Acompanhamento médico personalizado</span>
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="text-lg px-12 py-4">
              Aproveitar Desconto de 50%
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              *Promoção válida apenas para novos clientes
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={ctaImage} 
                alt="Tratamento médico capilar profissional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforme Seus Cabelos
          <br />
          <span className="text-primary-foreground">Com Excelência</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Tratamentos capilares profissionais que devolvem vida, brilho e saúde aos seus cabelos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-64">
            Agendar Consulta
          </Button>
          <Button variant="outline" size="lg" className="min-w-64 border-white text-white hover:bg-white hover:text-primary">
            Nossos Serviços
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm opacity-80">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-80">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm opacity-80">Garantia de Qualidade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
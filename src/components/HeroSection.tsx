import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

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
          Tratamentos Capilares que
          <br />
          <span className="text-primary-foreground">Transformam sua Autoestima</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Homens e mulheres que sofrem com queda de cabelo, caspa, dermatite, seborreia ou calvície encontram na Slim Capilar a solução completa para recuperar a saúde dos fios.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-64">
            Agendar Consulta
          </Button>
          <Button variant="outline" size="lg" className="min-w-64 border-white text-primary hover:bg-white hover:text-primary">
            Nossos Tratamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
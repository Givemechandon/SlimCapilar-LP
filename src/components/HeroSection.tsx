import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#000000] via-[#000000] to-[#000000]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "blur(4px) brightness(0.3)",
        }}
      />
      {/* Overlay com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/60" />
      {/* Overlay azul com opacidade */}
      <div className="absolute inset-0 bg-black-400 opacity-30 mix-blend-multiply pointer-events-none" />

      {/* Overlay escuro para dar contraste ao texto */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-emerald-400 text-white text-xs font-semibold tracking-widest shadow-lg uppercase drop-shadow-lg">
              Clínica Slim
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.45)]">
              Queda de Cabelo ? <br className="hidden md:block" />A Clínica Slim
              tem a Solução!
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-xl leading-relaxed text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
              A 45 anos sendo referência em tratamento capilar para homens,
              mulheres e crianças.{" "}
              <span className="font-bold text-white">Clínica Slim</span> é
              referência em saúde capilar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
              <a
                href="https://wa.me/5511952616079?text=Olá!%20Quero%20aproveitar%20o%20desconto%20de%2050%%20e%20agendar%20uma%20consulta!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-500 text-white font-bold text-lg shadow-xl border-0 drop-shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Agendar Consulta
                </Button>
              </a>
              <a href="#procedimentos" className="w-full sm:w-auto"></a>
            </div>
          </div>

          {/* Vídeo vertical com efeito neon */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary via-blue-400 to-emerald-400 blur-2xl opacity-40 pointer-events-none" />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-[620px] w-auto rounded-[3.5rem] shadow-2xl border-4 border-white object-fill relative z-10"
                poster={heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

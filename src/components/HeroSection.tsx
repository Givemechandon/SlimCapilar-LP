import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import heroImage from "@/assets/hero-clinic.jpg";

// Substitua pelo ID do vídeo do YouTube desejado
const YOUTUBE_VIDEO_ID = "ZMWMm2x54JY"; // Exemplo: "dQw4w9WgXcQ"
const YOUTUBE_LINK = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;

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

          {/* Vídeo YouTube responsivo horizontal e maior */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-10 md:mb-0">
            <div className="relative w-full max-w-[900px] aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-emerald-400 blur-2xl opacity-40 pointer-events-none z-0" />
              <iframe
                className="relative z-10 w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=1`}
                title="Vídeo do YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Frase e ícone abaixo do vídeo */}
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-2 text-lg font-bold text-white hover:text-emerald-400 transition-colors duration-200 bg-white/10 px-5 py-3 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaYoutube className="text-2xl text-red-600 group-hover:text-red-700 transition-colors duration-200" />
              Veja o Vídeo Completo!
              <FaArrowRight className="text-xl text-white group-hover:text-emerald-400 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import aedmasculino from "@/assets/aedmasculino.png";
import aedfeminino from "@/assets/aedfeminino.png";
import { FaArrowRight } from "react-icons/fa6";

const CasesDeSucesso = () => {
  return (
    <section className="w-full bg-primary py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
        Nossos Resultados
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8 w-full max-w-4xl">
        {/* Masculino */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="w-full aspect-[16/9] bg-white/10 rounded-2xl shadow-lg border-4 border-white overflow-hidden flex items-center justify-center">
            <img
              src={aedmasculino}
              alt="Antes e Depois Masculino"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="mt-2 text-white text-xs italic font-medium">
            *masculino
          </span>
        </div>
        {/* Feminino */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="w-full aspect-[16/9] bg-white/10 rounded-2xl shadow-lg border-4 border-white overflow-hidden flex items-center justify-center">
            <img
              src={aedfeminino}
              alt="Antes e Depois Feminino"
              className="max-w-full max-h-full w-full h-full object-contain"
              loading="lazy"
              style={{ background: "#fff", display: "block" }}
            />
          </div>
          <span className="mt-2 text-white text-xs italic font-medium">
            *feminino
          </span>
        </div>
      </div>
      <a
        href="https://wa.me/5511952616079?text=Olá!%20Quero%20um%20resultado%20assim!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white text-primary font-bold text-base px-8 py-4 rounded-full shadow-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
      >
        Quero um resultado assim!
        <FaArrowRight className="text-lg" />
      </a>
    </section>
  );
};

export default CasesDeSucesso;
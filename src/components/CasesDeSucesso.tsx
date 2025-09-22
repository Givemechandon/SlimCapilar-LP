import case1 from "@/assets/case1.jpg";
import case2 from "@/assets/case2.jpg";
import case3 from "@/assets/case3.jpg";
import case4 from "@/assets/case4.jpg";
import { FaArrowRight } from "react-icons/fa6";

// Adicione o nome/descrição de cada imagem aqui
const cases = [
  { img: case1, nome: "Infra vermelho" },
  { img: case2, nome: "Ionização" },
  { img: case3, nome: "Laser" },
  { img: case4, nome: "Pente de Metal" },

  { img: case1, nome: "Infra vermelho" },
  { img: case2, nome: "Ionização" },
  { img: case3, nome: "Laser" },
  { img: case4, nome: "Pente de Metal" },

  { img: case1, nome: "Infra vermelho" },
  { img: case2, nome: "Ionização" },
];

const CasesDeSucesso = () => {
  return (
    <section className="w-full bg-primary py-4 overflow-hidden">
      {/* Carrossel contínuo */}
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-20 animate-[slide-left_30s_linear_infinite] min-w-max">
          {cases.concat(cases).map((item, idx) => (
            <div key={idx} className="flex-grow-0 flex flex-col items-center">
              <img
                src={item.img}
                alt={`Case de sucesso ${idx + 1}`}
                className="h-30 w-56 rounded-xl shadow-md border-2 border-white object-cover"
                loading="lazy"
              />
              <span className="mt-1 text-white text-sm font-medium truncate w-40 text-center">
                {item.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* CTA abaixo do carrossel */}
      <div className="w-full flex justify-center mt-4">
        <a
          href="https://wa.me/5511952616079?text=Olá!%20Quero%20aproveitar%20o%20desconto%20de%2050%%20e%20agendar%20uma%20consulta!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-primary font-bold text-base px-6 py-3 rounded-full shadow-lg hover:bg-emerald-400 hover:text-white transition-all duration-300"
        >
          Quero um resultado assim!
          <FaArrowRight className="text-lg" />
        </a>
      </div>
      {/* Animação do carrossel */}
      <style>
        {`
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default CasesDeSucesso;

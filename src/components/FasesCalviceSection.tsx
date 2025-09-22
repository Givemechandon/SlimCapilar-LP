import masculino1 from "@/assets/masculino1.png";
import masculino2 from "@/assets/masculino2.png";
import masculino3 from "@/assets/masculino3.png";
import masculino4 from "@/assets/masculino4.png";
import masculino5 from "@/assets/masculino5.png";
import feminina1 from "@/assets/feminina1.png";
import feminina2 from "@/assets/feminina2.png";
import feminina3 from "@/assets/feminina3.png";
import feminina4 from "@/assets/feminina4.png";
import feminina5 from "@/assets/feminina5.png";

const fasesMasculinas = [
  {
    titulo: "Fase 1",
    descricao: "Início da calvície masculina: entradas discretas.",
    imagem: masculino1,
  },
  {
    titulo: "Fase 2",
    descricao: "Entradas mais evidentes e rarefação no topo.",
    imagem: masculino2,
  },
  {
    titulo: "Fase 3",
    descricao: "Rarefação acentuada no topo e nas entradas.",
    imagem: masculino3,
  },
  {
    titulo: "Fase 4",
    descricao: "Perda significativa de fios, áreas extensas sem cabelo.",
    imagem: masculino4,
  },
  {
    titulo: "Fase 5",
    descricao: "Calvície avançada, grande parte do couro cabeludo exposto.",
    imagem: masculino5,
  },
];

const fasesFemininas = [
  {
    titulo: "Fase 1",
    descricao: "Início da calvície feminina: afinamento dos fios.",
    imagem: feminina1,
  },
  {
    titulo: "Fase 2",
    descricao: "Diminuição do volume e rarefação difusa.",
    imagem: feminina2,
  },
  {
    titulo: "Fase 3",
    descricao: "Rarefação mais acentuada no topo da cabeça.",
    imagem: feminina3,
  },
  {
    titulo: "Fase 4",
    descricao: "Áreas visíveis do couro cabeludo.",
    imagem: feminina4,
  },
  {
    titulo: "Fase 5",
    descricao: "Perda intensa de fios em toda a cabeça.",
    imagem: feminina5,
  },
];

const FasesCalviceSection = () => (
  <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg">
          Fases da Calvície
        </h2>
        <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto">
          Conheça as principais etapas da evolução da calvície masculina e feminina.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Masculino</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {fasesMasculinas.map((fase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 border-t-4 border-primary group"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={fase.imagem}
                  alt={fase.titulo}
                  className="h-40 w-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">{fase.titulo}</h4>
              <p className="text-base text-primary/80">{fase.descricao}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-emerald-600 mb-6 text-center">Feminino</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {fasesFemininas.map((fase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 border-t-4 border-emerald-400 group"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={fase.imagem}
                  alt={fase.titulo}
                  className="h-40 w-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-emerald-600 mb-2">{fase.titulo}</h4>
              <p className="text-base text-primary/80">{fase.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FasesCalviceSection;
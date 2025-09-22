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

const whatsappNumber = "5511952616079";

const fasesMasculinas = [
  {
    titulo: "Fase 1",
    descricao: "Início da calvície masculina: entradas discretas.",
    imagem: masculino1,
    fase: 1,
  },
  {
    titulo: "Fase 2",
    descricao: "Entradas mais evidentes e rarefação no topo.",
    imagem: masculino2,
    fase: 2,
  },
  {
    titulo: "Fase 3",
    descricao: "Rarefação acentuada no topo e nas entradas.",
    imagem: masculino3,
    fase: 3,
  },
  {
    titulo: "Fase 4",
    descricao: "Perda significativa de fios, áreas extensas sem cabelo.",
    imagem: masculino4,
    fase: 4,
  },
  {
    titulo: "Fase 5",
    descricao: "Calvície avançada, grande parte do couro cabeludo exposto.",
    imagem: masculino5,
    fase: 5,
  },
];

const fasesFemininas = [
  {
    titulo: "Fase 1",
    descricao: "Início da calvície feminina: afinamento dos fios.",
    imagem: feminina1,
    fase: 1,
  },
  {
    titulo: "Fase 2",
    descricao: "Diminuição do volume e rarefação difusa.",
    imagem: feminina2,
    fase: 2,
  },
  {
    titulo: "Fase 3",
    descricao: "Rarefação mais acentuada no topo da cabeça.",
    imagem: feminina3,
    fase: 3,
  },
  {
    titulo: "Fase 4",
    descricao: "Áreas visíveis do couro cabeludo.",
    imagem: feminina4,
    fase: 4,
  },
  {
    titulo: "Fase 5",
    descricao: "Perda intensa de fios em toda a cabeça.",
    imagem: feminina5,
    fase: 5,
  },
];

const FasesCalviceSection = () => (
  <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black drop-shadow-lg">
          Fases da Calvície
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <p className="text-base text-primary/80 mb-4">{fase.descricao}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Estou%20na%20fase%20${fase.fase}%20masculina%20e%20quero%20a%20consulta%20com%2050%%20de%20desconto!`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-emerald-500 transition-colors duration-200 shadow"
              >
                Estou na fase {fase.fase}
              </a>
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
              <p className="text-base text-primary/80 mb-4">{fase.descricao}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Estou%20na%20fase%20${fase.fase}%20feminina%20e%20quero%20a%20consulta%20com%2050%%20de%20desconto!`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold text-sm hover:bg-primary transition-colors duration-200 shadow"
              >
                Estou na fase {fase.fase}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Botão para quem não tem certeza da fase */}
      <div className="flex justify-center mt-12">
        <a
          href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20n%C3%A3o%20tenho%20certeza%20de%20qual%20fase%20estou%2C%20mas%20quero%20a%20consulta%20com%2050%%20de%20desconto!`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 uppercase rounded-xl bg-emerald-600 text-white font-bold text-base shadow-xl hover:scale-105 transition-transform duration-200"
        >
          Não tenho certeza de qual fase estou
        </a>
      </div>
    </div>
  </section>
);

export default FasesCalviceSection;
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function getNextCountdown() {
  // Sempre retorna 12h em segundos
  return 1 * 60 * 60;
}

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const HeaderBanner = () => {
  const [time, setTime] = useState(getNextCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : getNextCountdown()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-3 text-center shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <p className="text-sm md:text-base font-medium uppercase">
          🎉 <span className="font-bold ">Desconto de 50% na consulta</span> - De
          R$400,00 por apenas{" "}
          <span className="text-xl font-bold">R$200,00</span>
        </p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-base md:text-lg font-bold uppercase text-white drop-shadow">
            Termina em
          </span>
          <span className="px-4 py-2 rounded-lg bg-red-500 text-lg md:text-xl font-mono tracking-widest text-white font-extrabold border-2 border-white shadow-lg">
            {formatTime(time)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
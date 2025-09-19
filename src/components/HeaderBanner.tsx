import { Button } from "@/components/ui/button";

const HeaderBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base font-medium">
          🎉 <span className="font-bold">Desconto de 50% na consulta</span> - De R$400,00 por apenas{" "}
          <span className="text-xl font-bold">R$200,00</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
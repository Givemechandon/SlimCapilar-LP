import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Recuperar a Saúde dos seus Cabelos?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Agende sua consulta agora e aproveite 50% de desconto
          </p>
          <a
            href="https://wa.me/5511952616079?text=Olá!%20Quero%20aproveitar%20o%20desconto%20de%2050%%20e%20agendar%20uma%20consulta!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="hero"
              size="lg"
              className="bg-white text-primary hover:bg-green-500 hover:text-white"
            >
              Agendar Agora
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <p className="mb-2">📞 (11) 4587-0085</p>
            <p className="mb-2">📧 contato@clinicaslim.com.br</p>
            <p>📍 R. Itália, 251 - Jardim Cica, Jundiaí - SP</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Horários</h4>
            <p className="mb-2">Segunda à Sexta: 9h às 19h</p>
            <p className="mb-2">Sábado: 9h às 17h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
            <p className="mb-2">📱 @clinicaslim_jundiai</p>
            <p className="mb-2">📘 Clínica Slim Jundiaí</p>
            <p>💬 WhatsApp: (11) 4587-0085</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="opacity-80">
            © 2025 Clínica Slim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

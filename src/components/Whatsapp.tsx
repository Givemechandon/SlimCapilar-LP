import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  phone = "5511952616079",
  message = "Olá! Quero aproveitar o desconto de 50% e agendar uma consulta!"
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 z-50"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}

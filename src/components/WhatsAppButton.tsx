import { MessageCircle } from "lucide-react";
import Image from "@/assets/insta.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://www.instagram.com/luanamacedooficiall?igsh=MWxla25mdTF5cmc5bw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-300 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={Image} alt="Instagram" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale conosco!
      </span>

      {/* Pulse animation */}
    </a>
  );
};

export default WhatsAppButton;

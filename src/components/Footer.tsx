import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border/20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-2">
              Vivendo de <span className="text-primary">Acessórios</span>
            </h4>
            <p className="text-sm text-muted-foreground">
              Transformando empreendedoras em referência no mercado de
              acessórios.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Social */}
          <div className="flex justify-end gap-4">
            <a
              href="https://www.instagram.com/luanamacedooficiall?igsh=MWxla25mdTF5cmc5bw%3D%3D"
              className="w-10 h-10 rounded-full bg-dark-lighter border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-lighter border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-dark-lighter border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vivendo de Acessórios. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

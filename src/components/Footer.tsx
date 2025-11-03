import { Github, Linkedin, Mail } from "lucide-react";
import logoSimple from "../assets/logof.png";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={logoSimple} 
                alt="Pedro França" 
                className="h-11 w-11 md:h-12 md:w-12"
              />
              <div className="flex items-center gap-2 self-center">
                <h3 className="text-2xl md:text-3xl text-white leading-none" style={{ fontWeight: 700 }}>
                  Pedro França
                </h3>
                <span className="text-sm text-muted-foreground leading-none">| Dev Web</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Desenvolvedor web focado em construir interfaces elegantes, 
              responsivas e otimizadas, utilizando as tecnologias mais modernas do mercado.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="mailto:contato@pedrofranca.dev"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("servicos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("portfolio");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pedro França. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

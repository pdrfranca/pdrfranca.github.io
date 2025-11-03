import { ArrowRight, Code, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Soluções Digitais Sob Medida</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforme Sua Ideia em Realidade Digital
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvimento de websites modernos e soluções digitais personalizadas
            para empresas que desejam se destacar no mundo online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 group px-8 py-6 text-lg w-full sm:w-auto"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              className="px-8 py-6 text-lg w-full sm:w-auto hover:text-primary transition-colors"
            >
              <Code className="mr-2 w-5 h-5" />
              Ver Portfólio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10+
              </div>
              <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                1  Semana
              </div>
              <p className="text-sm text-muted-foreground">Prazo Médio de Entrega</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-sm text-muted-foreground">Suporte</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Globe2, Sparkles, ArrowRight, Code } from "lucide-react";
import { Button } from "./ui/button";

type Lang = {
  name: string;
  level: string;
  segments: number;
  activeSegments: number;
  description: string;
};

const LevelBar: React.FC<{ segments: number; active: number }> = ({
  segments,
  active,
}) => {
  const primary = "var(--site-primary, #10b981)";
  const neutral = "rgba(255,255,255,0.15)";

  return (
    <div aria-hidden className="flex items-center gap-2">
      {Array.from({ length: segments }).map((_, i) => {
        const isActive = i < active;
        return (
          <motion.div
            key={i}
            className="rounded-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              flex: 1,
              height: 12,
              background: isActive ? primary : neutral,
              boxShadow: isActive
                ? "inset 0 -2px 0 rgba(0,0,0,0.15)"
                : "inset 0 -2px 0 rgba(0,0,0,0.08)",
            }}
          />
        );
      })}
    </div>
  );
};

export function LanguageSection() {
  const languages: Lang[] = [
    {
      name: "Português",
      level: "Fluente",
      segments: 3,
      activeSegments: 3,
      description:
        "Língua nativa, comunicação natural e expressiva em qualquer contexto.",
    },
    {
      name: "Inglês",
      level: "Intermediário",
      segments: 3,
      activeSegments: 2,
      description:
        "Boa leitura, escrita e conversação profissional no dia a dia.",
    },
    {
      name: "Espanhol",
      level: "Básico",
      segments: 3,
      activeSegments: 1,
      description:
        "Compreensão geral e capacidade de manter conversas simples.",
    },
  ];
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="idiomas"
      className="py-20 md:py-32 bg-card/50 relative overflow-hidden"
    >
      {/* Efeito de fundo animado */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Coluna Esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 inline-flex items-center mb-4">
              <Globe2 className="w-4 h-4 mr-1" />
              Idiomas e Comunicação
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Conectando Pessoas e Ideias Sem Barreiras
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A comunicação é o coração de qualquer projeto. Falo com clareza,
              adapto meu tom ao público e utilizo idiomas para construir pontes —
              seja com clientes internacionais, equipes multiculturais ou
              parceiros locais.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Cada idioma é uma oportunidade de ampliar horizontes e
              compreender diferentes perspectivas — algo essencial para o
              sucesso de projetos globais e colaborativos.
            </p>
          </motion.div>

          {/* Coluna Direita - Cards de Idiomas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl mb-6">Níveis de Proficiência</h3>
              <div className="flex flex-col gap-6">
                {languages.map((lang, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <div className="hover:shadow-lg transition-all space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{lang.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {lang.description}
                          </p>
                        </div>
                        <Badge
                          className={`${
                            lang.level === "Fluente"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : lang.level === "Intermediário"
                              ? "bg-accent/20 text-accent border-accent/30"
                              : "bg-muted/20 text-muted-foreground border-muted/30"
                          }`}
                        >
                          {lang.level}
                        </Badge>
                      </div>

                      <LevelBar
                        segments={lang.segments}
                        active={lang.activeSegments}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Centralizado */}
        <motion.div
          className="text-center mt-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles className="w-8 h-8 text-primary/60 mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Idiomas são mais do que palavras — são ferramentas para criar empatia,
            clareza e resultados. Se você busca alguém que entende cultura,
            contexto e comunicação,{" "}
            <span className="text-primary font-medium">está no lugar certo.</span>
          </p>

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
              Vamos Conversar
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
        </motion.div>
      </div>
    </section>
  );
}

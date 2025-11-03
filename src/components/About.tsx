import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Code2, 
  FileCode, 
  Braces, 
  Server, 
  Paintbrush, 
  FileJson, 
  Terminal, 
  GitBranch, 
  Github,
  Figma as FigmaIcon, 
  Palette, 
  Monitor,
  Database,
  Coffee,
  Globe,
  MessageSquare,
  LayoutDashboard,
  Globe2,
  Image,
  Scissors
} from "lucide-react";

const skills = [
  // --- Frontend ---
  { name: "HTML/CSS", icon: Code2 },
  { name: "JavaScript", icon: FileJson },
  { name: "TypeScript", icon: FileCode },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Braces },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "Responsive Design", icon: Monitor },

  // --- Backend ---
  { name: "Node.js", icon: Server },
  { name: "PHP", icon: Globe },
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Terminal },
  { name: "MongoDB", icon: Database },
  { name: "Discord.js", icon: MessageSquare },

  // --- Mobile ---
  { name: "Dart", icon: FileCode },
  { name: "Flutter", icon: Paintbrush },

  // --- Version Control ---
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },

  // --- Design / Edição ---
  { name: "Figma", icon: FigmaIcon },
  { name: "Photoshop", icon: Image },
  { name: "Canva", icon: Palette },
  { name: "CapCut", icon: Scissors },
  { name: "UI/UX Design", icon: LayoutDashboard },
];


export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background Effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{padding:25, marginBottom:20}}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6 bg-card border border-border rounded-2xl shadow-md"
            >
              <img
                src="https://github.com/pdrfranca.png"
                alt="Pedro França"
                style={{ width: 80, height: 80 }}
                className="rounded-full border-2 border-primary object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Pedro França</h2>
                <p className="text-primary font-medium">Desenvolvedor Web</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Especializado em React e UI/UX Design
                </p>
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou desenvolvedor web front-end apaixonado por criar experiências digitais excepcionais. Com anos de experiência na área, transformo ideias em interfaces modernas, funcionais e centradas no usuário.
              </p>
              <p>
                Minha abordagem une design contemporâneo, código limpo e foco total na experiência do usuário. Trabalho com as tecnologias mais atuais do mercado para garantir que cada projeto seja rápido, responsivo e preparado para o futuro.
              </p>
              <p>
                Acredito que cada projeto é único e merece atenção especial. Por isso, ofereço consultoria personalizada para entender suas necessidades e desenvolver a melhor solução visual e funcional para o seu negócio.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <div className="text-2xl text-primary mb-1">3+</div>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-2xl text-primary mb-1">3000h+ </div>
                <p className="text-sm text-muted-foreground">De Aperfeiçoamento</p>
              </div>
              <div>
                <div className="text-2xl text-primary mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl mb-6">Habilidades & Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <skill.icon className="w-4 h-4" />
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="mb-4">Metodologia de Trabalho</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Planejamento detalhado e alinhamento de expectativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Design moderno e responsivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Desenvolvimento ágil com entregas contínuas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Testes rigorosos de qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Suporte pós-lançamento</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

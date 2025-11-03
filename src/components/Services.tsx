import { Code2, Smartphone, Palette, Rocket, Search, LineChart } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Sites modernos e responsivos com React, Next.js e as mais recentes tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Mobile's First",
    description: "Design otimizado para celulares, com foco em performance e usabilidade.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces intuitivas e atraentes focadas na experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "Integrações Web",
    description: "Conexão do front-end com APIs, bancos de dados e serviços externos para garantir funcionalidade e escalabilidade.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Otimização para mecanismos de busca e performance excepcional.",
  },
  {
    icon: LineChart,
    title: "Consultoria Digital",
    description: "Estratégias personalizadas para crescimento e presença digital da sua empresa.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas para transformar sua presença digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o que procura?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary hover:underline"
          >
            Entre em contato e vamos conversar sobre seu projeto →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
        <CardHeader>
          <motion.div 
            className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <service.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

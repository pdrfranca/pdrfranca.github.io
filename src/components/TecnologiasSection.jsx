// TecnologiasSection.jsx
import React from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function TecnologiasSection() {
  const categories = [
    { title: "Frontend", icon: <Icon icon="tabler:device-desktop" className="w-5 h-5 text-teal-400" />, items: [
        { name: "HTML", icon: "logos:html-5", desc: "Estruturação de páginas web." },
        { name: "CSS", icon: "logos:css-3", desc: "Estilização de páginas web." },
        { name: "JavaScript", icon: "logos:javascript", desc: "Interatividade e lógica no frontend." },
        { name: "React", icon: "logos:react", desc: "Interfaces reativas com JavaScript." },
    ]},
    { title: "Backend", icon: <Icon icon="tabler:settings" className="w-5 h-5 text-teal-400" />, items: [
        { name: "Node.js", icon: "logos:nodejs-icon", desc: "Execução de JavaScript no servidor." },
        { name: "Java", icon: "logos:java", desc: "Execução de Java no servidor." },
        { name: "PHP", icon: "logos:php", desc: "Execução de PHP no servidor." },
        { name: "MongoDB", icon: "logos:mongodb-icon", desc: "Banco de dados NoSQL flexível." },
    ]},
    { title: "Mobile & Outros", icon: <Icon icon="tabler:device-mobile" className="w-5 h-5 text-teal-400" />, items: [
        { name: "Dart", icon: "logos:dart", desc: "Linguagem para Flutter." },
        { name: "Flutter", icon: "logos:flutter", desc: "Framework de apps nativos com UI moderna." },
        { name: "Python", icon: "logos:python", desc: "Versátil para scripts, dados e automações." },
        { name: "Discord.js", icon: "logos:discord-icon", desc: "Bots Discord em JavaScript." },
    ]},
  ];

  return (
    <section id="tecnologias" className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
        <Icon icon="mdi:lightbulb-on-outline" className="w-7 h-7 text-teal-400" />
        Tecnologias Que Utilizo
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-800/60 backdrop-blur-sm p-6 rounded-2xl border border-zinc-700 transition hover:border-zinc-500"
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">{category.icon} {category.title}</h3>
            <ul className="space-y-3">
              {category.items.map((tech, j) => (
                <motion.li
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: j * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-3"
                >
                  <Icon icon={tech.icon} className="w-6 h-6 shrink-0" />
                  <span className="text-zinc-300 group-hover:text-white transition">{tech.name}</span>
                  <div className="absolute z-10 hidden group-hover:flex bg-zinc-900 text-xs text-white px-3 py-2 rounded shadow-md top-8 left-1/2 -translate-x-1/2 whitespace-nowrap animate-fade-in">
                    {tech.desc}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
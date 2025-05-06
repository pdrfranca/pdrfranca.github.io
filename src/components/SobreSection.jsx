import React from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function SobreSection() {
  return (
    <section id="sobre" className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold flex items-center gap-3 text-white"
      >
        <Icon icon="mdi:laptop" className="w-7 h-7 text-teal-400" />
        Sobre Mim
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <img
            src="https://avatars.githubusercontent.com/u/112125083?v=4"
            alt="Pedro França"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full border border-teal-500 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 text-zinc-300 max-w-2xl"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white">Pedro França</h3>
            <p className="mt-2 leading-relaxed">
              Sou um desenvolvedor apaixonado por <span className="text-teal-400">tecnologia</span> e <span className="text-teal-400">inovação</span>.
              Exploro diversas áreas do desenvolvimento de software, sempre buscando criar soluções criativas e eficientes que transformem ideias em realidade.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              { icon: "mdi:book-open-variant", text: "Aprendizado constante:", desc: "Sempre explorando novas tecnologias e boas práticas." },
              { icon: "mdi:chat-processing-outline", text: "Ajuda técnica:", desc: "Compartilho conhecimento sobre linguagens, ferramentas e desenvolvimento." },
              { icon: "mdi:leaf", text: "Evolução contínua:", desc: "Busco aprimorar constantemente minhas habilidades técnicas e criativas." },
              { icon: "mdi:laptop", text: "Criação de soluções:", desc: "Desenvolvimento de projetos para diferentes plataformas." },
              { icon: "mdi:rocket-launch-outline", text: "Contribuição open-source:", desc: "Ativo na comunidade tech." },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon icon={item.icon} className="w-5 h-5 text-teal-400 mt-1" />
                <p><span className="text-white font-medium">{item.text}</span> {item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

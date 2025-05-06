import React from "react";
import { motion } from 'framer-motion';

export default function CallToActionSection({ onContactClick }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 sm:px-12 text-white rounded-2xl overflow-hidden border border-zinc-700 shadow-lg"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(53, 156, 117, 0.42)" }}></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold drop-shadow-xl text-white"
        >Vamos criar algo incrível juntos?</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md"
        >Entre em contato e leve seu projeto para o próximo nível com meu toque criativo e técnico.</motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          onClick={onContactClick}
          className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-zinc-100 transition"
        >Fale comigo</motion.button>
      </div>
    </motion.section>
  );
}
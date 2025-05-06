import React from "react";
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 text-white flex flex-col items-center justify-center z-50"
    >
      <img
        src="../assets/icon.png"
        alt="Foguete Animado"
        className="w-48 rocket-load mb-6 rotate-[-38deg]"
        draggable={false}
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#00ffe5] glitch">
        Pedro França
      </h1>
      <h2 className="text-xl md:text-2xl text-[#00ffe5] mt-2 font-mono">Desenvolvedor</h2>
      <p className="mt-6 font-mono text-gray-400"> INICIANDO INTERFACE…</p>
    </motion.div>
  );
}
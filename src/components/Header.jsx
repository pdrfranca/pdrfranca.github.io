import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-zinc-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 select-none" draggable={false}>
          NODR<span className="text-teal-400">.</span>
        </h1>
        <nav className="hidden md:flex space-x-8 text-base text-zinc-400 font-medium">
          <a href="#sobre" className="hover:text-white transition">Sobre Mim</a>
          <a href="#tecnologias" className="hover:text-white transition">Tecnologias</a>
          <a href="#repos" className="hover:text-white transition">Repositórios</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </nav>
        <button
          className="md:hidden text-zinc-400 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} className="w-7 h-7" />
        </button>
      </div>
      {menuOpen && (
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-4 text-base text-zinc-300"
        >
          <a href="#sobre" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
          <a href="#tecnologias" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Tecnologias</a>
          <a href="#repos" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Repositórios</a>
          <a href="#contato" className="block hover:text-white" onClick={() => setMenuOpen(false)}>Contato</a>
        </motion.nav>
      )}
    </motion.header>
  );
}
// src/components/ContactModal.jsx
import React from "react";
import { motion } from 'framer-motion';

export default function ContactModal({ isOpen, onClose, formData = {}, onChange, onSubmit }) {
  // Garante que formData nunca seja undefined e define valores padrões
  const { nome = "", email = "", servico = "Criação de site", mensagem = "" } = formData;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-zinc-900 border border-teal-500 rounded-2xl p-8 w-[90%] max-w-lg text-white shadow-xl space-y-6"
      >
        <button
          className="absolute top-3 right-3 text-zinc-400 hover:text-white"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-teal-400">Fale Comigo</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="nome"
            placeholder="Seu nome"
            required
            value={nome}
            onChange={onChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            value={email}
            onChange={onChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          />
          <select
            name="servico"
            value={servico}
            onChange={onChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          >
            <option>Criação de site</option>
            <option>Landing page</option>
            <option>Design responsivo</option>
            <option>Outro</option>
          </select>
          <textarea
            name="mensagem"
            rows="4"
            placeholder="Me fale mais sobre o que você precisa..."
            required
            value={mensagem}
            onChange={onChange}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Enviar mensagem
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

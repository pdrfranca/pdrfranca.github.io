import React from "react";
import { motion } from 'framer-motion';

export default function StatusModal({ status, onClose }) {
  if (!status) return null;

  const isSuccess = status === "success";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900 border border-teal-500 rounded-2xl p-6 max-w-md text-white text-center shadow-xl space-y-4"
      >
        <h4 className="text-xl font-bold text-teal-400">
          {isSuccess ? "Mensagem enviada com sucesso!" : "Erro ao enviar mensagem 😢"}
        </h4>
        <p className="text-sm text-white/80">
          {isSuccess
            ? "Entrarei em contato em breve!"
            : "Tente novamente mais tarde ou entre em contato direto abaixo."}
        </p>
        <p className="font-semibold">WhatsApp: (15) 99778-0521</p>
        <button
          onClick={onClose}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-2 rounded-lg transition"
        >
          Fechar
        </button>
      </motion.div>
    </motion.div>
  );
}
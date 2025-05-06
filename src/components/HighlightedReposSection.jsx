// src/components/HighlightedReposSection.jsx
import React from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function HighlightedReposSection({ highlighted = [] }) {
  // Garante que highlighted seja um array
  const reposList = Array.isArray(highlighted) ? highlighted : [];

  return (
    <section id="repos-highlighted">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-4 flex items-center gap-2 text-white"
      >
        <Icon icon="ph:push-pin-bold" className="text-teal-400 text-xl" />
        Destaques
      </motion.h2>

      {reposList.length === 0 ? (
        <p className="text-zinc-400">Nenhum repositório em destaque disponível no momento.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {reposList.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="block p-4 bg-zinc-800 rounded hover:bg-zinc-700 transition"
            >
              <h3 className="font-semibold text-white">{repo.name}</h3>
              <p className="text-sm text-zinc-400">{repo.description || "Sem descrição disponível."}</p>
              <p className="text-xs mt-1 text-yellow-400">⭐ {repo.stargazers_count}</p>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}

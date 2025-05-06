import React from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function AllReposSection({ repos }) {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mt-10 mb-4 flex items-center gap-2 text-white"
      >
        <Icon icon="mdi:folder" className="text-teal-400 text-xl" />
        Todos os Repositórios
      </motion.h2>
      {repos.length === 0 ? (
        <p className="text-zinc-400">Nenhum repositório público disponível.</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-3">
          {repos.map((repo, i) => (
            <motion.li
              key={repo.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-3 rounded"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:underline flex items-center gap-2"
              >
                <Icon icon="mdi:github" className="text-teal-400 text-base" />
                {repo.name}
              </a>
              <p className="text-sm text-zinc-400">{repo.description || "Sem descrição disponível."}</p>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
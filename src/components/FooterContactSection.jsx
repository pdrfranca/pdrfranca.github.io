import React from "react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function FooterContactSection() {
  const contacts = [
    { icon: "mdi:email-send-outline", label: "E-mail", content: "pfrutopro@gmail.com", link: "mailto:pfrutopro@gmail.com" },
    { icon: "mdi:instagram", label: "Instagram", content: "@pdr.frnc", link: "https://instagram.com/pdr.frnc" },
    { icon: "ic:baseline-discord", label: "Discord", content: "𝕾𝖍𝖆𝖉𝖔𝖜 𝕴𝖓𝖘𝖕𝖎𝖗𝖊", link: "https://discord.gg/3R9UxRSAQ4" },
  ];

  return (
    <section id="contato" className="mt-10 border-t border-zinc-800 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8"
      >
        <h1 className="text-2xl font-bold">
          NODR<span className="text-4xl text-teal-400">.</span>
        </h1>
        <div className="space-y-2 mt-4 sm:mt-0 text-sm text-zinc-400">
          {contacts.map((item, i) => (
            <motion.p
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Icon icon={item.icon} className="text-teal-400 text-lg" />
              {item.label}:
              <span>
                <a href={item.link} target="_blank" className="hover:underline hover:text-teal-400">
                  {item.content}
                </a>
              </span>
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
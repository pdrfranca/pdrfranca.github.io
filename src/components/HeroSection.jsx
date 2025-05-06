import React, { useRef, useState, useEffect } from "react";
import Typed from "typed.js";
import { motion } from 'framer-motion';

export default function HeroSection({ onContactClick }) {
  const typedElement = useRef(null);
  const [canStartTyping, setCanStartTyping] = useState(false);

  useEffect(() => {
    if (canStartTyping && typedElement.current) {
      const instance = new Typed(typedElement.current, {
        strings: ["Olá, eu sou Pedro França"],
        typeSpeed: 50,
        backSpeed: 25,
        showCursor: true,
        cursorChar: "|",
        loop: false,
      });
      return () => instance.destroy();
    }
  }, [canStartTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      const particlesContainer = document.getElementById("particles-js");
  
      if (window.particlesJS && particlesContainer) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 25,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 2,
              random: true,
            },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 5,
              direction: "bottom",
              random: false,
              straight: true,
              out_mode: "out",
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        });
  
        clearInterval(interval); // para o loop quando carregar
      }
    }, 300); // tenta a cada 300ms
  
    return () => clearInterval(interval); // limpa o interval se o componente for desmontado
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden text-white">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <motion.img
        src="./assets/icon.png"
        alt="Foguete Animado"
        className="absolute w-80 rocket-motion select-none left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 rotate-[-38deg] z-10"
        initial={{ y: 100, opacity: 0, rotate: -60 }}
        animate={{ y: 0, opacity: 1, rotate: -38 }}
        transition={{ duration: 1, ease: "easeOut" }}
        draggable={false}
        onAnimationComplete={() => setCanStartTyping(true)}
      />
      <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight w-fit text-teal-400"
        >
          <span ref={typedElement}></span>
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl max-w-xl text-gray-300">
          Desenvolvedor focado em criar experiências digitais modernas e envolventes.
        </motion.p>
        <motion.button
          onClick={onContactClick}
          className="mt-8 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-teal-400 transition duration-300"
        >
          Entre em contato
        </motion.button>
      </div>
    </section>
  );
}
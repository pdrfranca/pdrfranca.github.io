// src/App.jsx
import React, { useEffect, useState, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import CallToActionSection from "./components/CallToActionSection";
import TecnologiasSection from "./components/TecnologiasSection";
import HighlightedReposSection from "./components/HighlightedReposSection";
import AllReposSection from "./components/AllReposSection";
import ContactModal from "./components/ContactModal";
import StatusModal from "./components/StatusModal";
import FooterContactSection from "./components/FooterContactSection";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScHlDuedVFV5BNVpvS8GoDneEOmUxR0DGpRAnGt_ylsGIjdfw/formResponse";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [highlighted, setHighlighted] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    servico: "Criação de site",
    mensagem: "",
  });

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch GitHub repos
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/pdrfranca/repos"
        );
        const data = await response.json();
        const all = data.filter((repo) => !repo.name.startsWith("pdrfranca"));
        setRepos(all);
        const top = all
          .filter((r) => r.stargazers_count >= 1)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3);
        setHighlighted(top);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRepos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formBody = new FormData();
    formBody.append("entry.979414079", formData.nome);
    formBody.append("entry.506189898", formData.email);
    formBody.append("entry.267716898", formData.servico);
    formBody.append("entry.1789879657", formData.mensagem);
    try {
      await fetch(FORM_URL, { method: "POST", mode: "no-cors", body: formBody });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="p-6 max-w-6xl mx-auto space-y-14">
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <HeroSection onContactClick={() => setIsModalOpen(true)} />
          <SobreSection />
          <CallToActionSection onContactClick={() => setIsModalOpen(true)} />
          <TecnologiasSection />
          <HighlightedReposSection highlighted={highlighted} />
          <AllReposSection repos={repos} />
          <FooterContactSection />
        </main>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <StatusModal status={status} onClose={() => setStatus(null)} />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

const GITHUB_USER = "pdrfranca"; // 👈 seu usuário GitHub

// Tipagem dos repositórios
interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  fork: boolean;
  owner: { login: string };
  languages_url: string;
  homepage: string;
}

// Função para formatar nomes dos repositórios
function formatRepoName(name: string) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Portfolio() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos`
        );
        if (!response.ok) throw new Error("Erro ao carregar repositórios");
        const data = await response.json();

        const filtered: Repo[] = (data || [])
          .filter(
            (repo: Repo) =>
              !repo.fork &&
              !repo.name.toLowerCase().startsWith(GITHUB_USER.toLowerCase())
          )
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);

        setRepos(filtered);
      } catch (err: any) {
        setError(err?.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const totalPages = Math.max(1, Math.ceil(repos.length / itemsPerPage));
  const startIndex = page * itemsPerPage;
  const visibleRepos = repos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Projetos Recentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Meus repositórios públicos no GitHub
          </p>
        </motion.div>

        {loading && (
          <p className="text-center text-muted-foreground">
            Carregando projetos...
          </p>
        )}
        {error && <p className="text-center text-red-500">Erro: {error}</p>}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-muted-foreground">
            Nenhum projeto encontrado.
          </p>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="relative gap-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {visibleRepos.map((repo, index) => (
                  <ProjectCard key={repo.id} repo={repo} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 pt-8">
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
                <p className="text-muted-foreground">
                  Página {page + 1} de {totalPages}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === totalPages - 1}
                >
                  Próxima <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  const [pageUrl, setPageUrl] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);

  const checkUrlExists = async (url: string) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return true;
    } catch {}
    try {
      const res = await fetch(url, { method: "GET" });
      return res.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    let mounted = true;

    const detectPages = async () => {
      // 1️⃣ Primeiro tenta o homepage declarado no repositório
      if (repo.homepage) {
        const ok = await checkUrlExists(repo.homepage);
        if (mounted && ok) {
          setPageUrl(repo.homepage);
          return;
        }
      }

      // 2️⃣ Depois tenta o GitHub Pages padrão
      const candidate = `https://${repo.owner?.login}.github.io/${repo.name}/`;
      const exists = await checkUrlExists(candidate);
      if (mounted && exists) {
        setPageUrl(candidate);
        return;
      }

      // 3️⃣ Se nenhum funcionar, não exibe o botão
      setPageUrl(null);
    };

    detectPages();
    return () => {
      mounted = false;
    };
  }, [repo]);

  // Linguagens
  useEffect(() => {
    const fetchLangs = async () => {
      try {
        const res = await fetch(repo.languages_url);
        const data = await res.json();
        setLanguages(Object.keys(data));
      } catch {
        setLanguages([]);
      }
    };
    fetchLangs();
  }, [repo.languages_url]);

  // Tópicos
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${repo.full_name}`, {
          headers: {
            Accept: "application/vnd.github.mercy-preview+json",
          },
        });
        const data = await res.json();
        setTopics(data.topics || []);
      } catch {
        setTopics([]);
      }
    };
    fetchTopics();
  }, [repo.full_name]);

  const combined = [...languages, ...topics];

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const tryImages = async () => {
      const possibleImages = [
        `https://raw.githubusercontent.com/${repo.full_name}/main/preview.png`,
        `https://raw.githubusercontent.com/${repo.full_name}/main/banner.png`,
        `https://raw.githubusercontent.com/${repo.full_name}/main/screenshot.png`,
        `https://raw.githubusercontent.com/${repo.full_name}/main/cover.png`,
      ];

      for (const url of possibleImages) {
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) {
            setImageUrl(url);
            return;
          }
        } catch {
          /* ignora erros de rede */
        }
      }

      setImageUrl(null);
    };

    tryImages();
  }, [repo.full_name]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
        <div className="h-48 relative overflow-hidden rounded-t-xl">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={repo.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-sm text-muted-foreground">{formatRepoName(repo.name)}</p>
              </div>
            </div>
          )}

          {/* Overlay de botões no hover */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {pageUrl && (
              <motion.a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary rounded-full hover:bg-primary/90"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            <motion.a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-full hover:bg-accent"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>


        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            {formatRepoName(repo.name)}
            {repo.stargazers_count > 0 && (
              <span className="flex items-center text-yellow-400 text-sm">
                {repo.stargazers_count}
                <Star
                  className="w-4 h-4 ml-1"
                  color="#01f0a3"
                  fill="#01f0a3"
                  stroke="none"
                />
              </span>
            )}
          </CardTitle>
          <CardDescription>
            {repo.description || "Sem descrição disponível."}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {combined.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {combined.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {item}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

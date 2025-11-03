# Portfólio Pessoal – Pedro França

Este projeto é um **site de portfólio pessoal** de Pedro França, construído como uma aplicação de página única (SPA) em React. O objetivo é apresentar informações sobre o autor e seus projetos. A interface foi implementada com **React** – uma biblioteca JavaScript para criar interfaces de usuário – e empacotada com **Vite**, uma ferramenta de build moderna e rápida para aplicações web. Para estilização, utiliza-se **Tailwind CSS**, um framework CSS *utility-first* que fornece classes utilitárias pré-definidas para compor qualquer layout diretamente no HTML. Outros componentes incluem **Framer Motion** (biblioteca de animações para React), **Iconify React** (biblioteca de ícones SVG), **tsParticles** (animações de partículas de fundo) e **Typed.js** (efeitos de digitação animada de texto). O site é responsivo por padrão (graças às classes utilitárias do Tailwind) e inclui seções como *Hero* (introdução), *Sobre Mim*, projetos e contato, além de efeitos visuais e animações suaves.

## Demonstração Online

O site está hospedado no **GitHub Pages** (serviço de hospedagem de sites estáticos do GitHub). A versão online pode ser acessada em: [https://pdrfranca.github.io](https://pdrfranca.github.io).

## Tecnologias Utilizadas

* **React** (biblioteca JavaScript para interfaces)
* **Vite** (ferramenta de build e servidor de desenvolvimento rápido)
* **Tailwind CSS** (framework CSS *utility-first* para estilos responsivos)
* **Framer Motion (Motion)** (biblioteca de animações para React)
* **tsParticles** (animações de partículas, confetes e fogos de artifício como plano de fundo)
* **Typed.js** (biblioteca para efeito de texto digitado animado)
* **Iconify React** (componentes de ícones SVG, com acesso a mais de 200.000 ícones)
* **vite-plugin-gh-pages** (plugin do Vite para publicar no GitHub Pages) e **gh-pages** (para deploy)
* **PostCSS** e **Autoprefixer** (ferramentas para processamento de CSS/Tailwind)

## Estrutura do Projeto

* **public/assets/** – imagens públicas (background, capa do site `capa.jpg` e favicon `icon.png`).
* **src/** – código-fonte React:

  * `main.jsx`: ponto de entrada (monta o componente raiz).
  * `App.jsx`: componente principal que organiza as seções do site.
  * `index.css`: importação dos estilos base do Tailwind.
  * **components/**: componentes React reutilizáveis:

    * `Header.jsx`: barra de navegação (*Navbar*) fixa no topo.
    * `HeroSection.jsx`: seção de boas-vindas com texto dinâmico (Typed.js).
    * `SobreSection.jsx`: seção “Sobre Mim” com descrição pessoal e habilidades.
    * `TecnologiasSection.jsx`: lista de tecnologias e ícones associados.
    * `HighlightedReposSection.jsx`: exibe alguns projetos destacados com filtro estrelas do github.
    * `AllReposSection.jsx`: lista dinâmica de todos os repositórios GitHub (via API) com filtro `pdrfranca` excluso.
    * `FooterContactSection.jsx`: rodapé com informações de contato e redes sociais.
    * `ContactModal.jsx`: modal de formulário de contato.
    * `StatusModal.jsx`: modal de status ou notificações.
    * `LoadingScreen.jsx`: tela de carregamento inicial.
    * `CallToActionSection.jsx`: seção de chamada para ação (ex: convite para contato).
* Arquivos de configuração e build: `package.json` (dependências e scripts), `vite.config.js` (configuração do Vite), `tailwind.config.js`, `postcss.config.js`.
* Outros: `index.html` (template HTML) e `LICENSE.txt` (licença).

## Como Rodar Localmente

Para executar o projeto localmente, siga os passos abaixo:

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/pdrfranca/pdrfranca.github.io.git
   ```
2. **Instalar dependências:**

   ```bash
   npm install
   ```
3. **Iniciar o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor Vite (ou `vite`), geralmente acessível em `http://localhost:3000`.
   
5. **Visualizar no navegador:** abra `http://localhost:3000` para ver o site em modo de desenvolvimento.
  
7. **Gerar build de produção:**

   ```bash
   npm run build
   ```

   Isso executa `vite build`, compilando os arquivos para produção na pasta `dist`.
   
9. **(Opcional) Publicar no GitHub Pages:**

   ```bash
   npm run deploy
   ```

   O comando `npm run deploy` utiliza o script `gh-pages` para enviar a pasta `dist` ao GitHub Pages.

## Funcionalidades Principais

* **Navbar (Header.jsx):** menu fixo com links âncora para cada seção (Home, Sobre, Tecnologias, Projetos, Contato).
* **Hero Section (HeroSection.jsx):** banner inicial com saudação dinâmica (“Olá, eu sou Pedro França”) usando Typed.js para efeito de digitação e background animado.
* **Sobre Mim (SobreSection.jsx):** apresentação pessoal em português, com ícones ilustrativos (laptop, etc.) e textos animados (Framer Motion) destacando habilidades e experiências.
* **Tecnologias (TecnologiasSection.jsx):** lista visual de tecnologias usadas (React, Node.js, JavaScript, etc.) com ícones e barras de proficiência.
* **Projetos (HighlightedReposSection.jsx / AllReposSection.jsx):** integração com a API do GitHub para obter os repositórios públicos de *pdrfranca*. Mostra alguns projetos destacados (por número de estrelas) e, logo abaixo, a lista completa de repositórios com nome e descrição. Cada item tem link direto para o GitHub.
* **Contato (FooterContactSection.jsx, ContactModal.jsx):** área de contato com informações de e-mail e links de redes sociais. Um botão abre um modal (`ContactModal`) com formulário de contato (nome, e-mail, serviço, mensagem) que permite enviar ou preparar uma mensagem. Animações e transições (fade, escala) são usadas para abertura do modal.
* **Outros componentes:** tela de carregamento (`LoadingScreen.jsx`) exibida enquanto dados carregam; modal de status/notificação (`StatusModal.jsx`); chamadas para ação personalizadas em seções específicas (`CallToActionSection.jsx`). Todas as transições e entradas de seção aproveitam o Framer Motion para animações suaves (fade-in, slide-in, etc.).

## Layout e Design

O design segue um tema moderno de **modo escuro**, com fundo escuro (classes como `bg-zinc-900` do Tailwind) e textos em branco, destacando elementos em verde-azulado (teal). A interface é construíra com classes utilitárias do Tailwind, facilitando ajustes responsivos sem escrever CSS extra. Por exemplo, contêineres flexíveis (`flex`, `items-center`, `justify-center`), espaçamentos (`p-4`, `mt-10`), tamanhos de fonte (`text-3xl`, `font-bold`) e cores são aplicados diretamente nas marcações. Cada seção ocupa largura total adaptável ao tamanho da tela, garantindo legibilidade em desktop e mobile. As animações aplicadas (opacity, slide, escala) conferem dinamismo ao layout, mas de forma discreta, seguindo princípios de usabilidade (interfaces previsíveis e responsivas).

## Licença

Este projeto está licenciado sob a **MIT License** (ver arquivo `LICENSE.txt`). A Licença MIT é uma licença permissiva de código aberto, que impõe pouquíssimas restrições ao uso, modificação e distribuição do código. Portanto, qualquer pessoa pode usar ou adaptar este projeto desde que preserve o aviso de copyright original.

## Contato

Informações de contato do autor (extraídas do próprio site):

* **E-mail:** [pfrutopro@gmail.com](mailto:pfrutopro@gmail.com)
* **Instagram:** [@pdr.frnc](https://instagram.com/pdr.frnc)
* **Discord:** [Shadow Inspire](https://discord.gg/3R9UxRSAQ4)

Caso queira sugestões de melhoria, use os canais acima para falar diretamente com o autor.

**Fontes:** Documentação oficial de React, Tailwind CSS, Vite, e materiais sobre MIT License e as demais bibliotecas mencionadas.

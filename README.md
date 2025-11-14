# Portfólio de Renan Augusto Santos | Desenvolvedor Frontend

Este é o repositório do meu portfólio pessoal, um projeto desenvolvido para apresentar minhas habilidades, projetos e experiência como desenvolvedor frontend. Inspirado em designs modernos e sofisticados, este site foi construído com as mais recentes tecnologias do ecossistema React.

**[Acesse a versão publicada aqui](https://renanfrontend.github.io/portfolio-renanfrontend/)**

## ✨ Visão Geral

Este portfólio é uma Single Page Application (SPA) totalmente responsiva, projetada com foco em uma experiência de usuário fluida e elegante. As animações sutis de fade-in e os efeitos de hover criam uma navegação agradável, enquanto a integração com a API do GitHub permite que meus projetos mais recentes sejam exibidos dinamicamente.

### Funcionalidades Principais

-   **Design Sofisticado:** Interface limpa e moderna, com tipografia elegante e uma paleta de cores harmoniosa.
-   **Totalmente Responsivo:** Experiência de visualização otimizada para desktops, tablets e smartphones.
-   **Animações Suaves:** Efeitos de fade e transições sutis que enriquecem a interação do usuário sem comprometer o desempenho.
-   **Projetos Dinâmicos do GitHub:** A seção de projetos consome a API do GitHub para buscar e exibir meus repositórios públicos, com um sistema de "carregamento infinito" ao rolar a página.
-   **SEO Otimizado:** Meta tags e semântica de HTML adequadas para melhor indexação nos motores de busca.
-   **Deploy Automatizado:** O projeto é publicado automaticamente no GitHub Pages através de um fluxo de trabalho do GitHub Actions.

## 🚀 Tecnologias Utilizadas

-   **React:** Biblioteca principal para a construção da interface de usuário.
-   **TypeScript:** Para um código mais robusto, escalável e com tipagem estática.
-   **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
-   **React Icons:** Biblioteca de ícones para enriquecer a UI.
-   **Intersection Observer API:** Utilizada através de um hook customizado para disparar animações ao rolar a página.
-   **GitHub Actions:** Para integração e deploy contínuos (CI/CD).

## ⚙️ Como Executar o Projeto Localmente

Para clonar e rodar este projeto em sua máquina local, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/renanfrontend/portfolio-renanfrontend.git
    cd portfolio-renanfrontend
    ```

2.  **Instale as dependências:**
    _Este projeto foi criado em um ambiente que não utiliza um package.json, mas em um projeto real, você rodaria:_
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    _Em um ambiente de desenvolvimento padrão (como Vite ou Create React App), você usaria:_
    ```bash
    npm run dev
    # ou
    npm start
    ```

4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 🚀 Deploy

O deploy deste projeto é automatizado. Qualquer `push` para a branch `main` irá acionar o fluxo de trabalho do GitHub Actions definido em `.github/workflows/deploy.yml`. Este workflow irá construir o projeto e publicá-lo na branch `gh-pages`, que por sua vez é servida pelo GitHub Pages.
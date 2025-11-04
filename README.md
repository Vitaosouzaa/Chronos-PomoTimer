# ⏱️ Chronos PomoTimer

Um aplicativo Pomodoro moderno e minimalista desenvolvido com **React**,
**TypeScript** e **Vite**.  
O Chronos PomoTimer foi criado para ajudar estudantes e profissionais a
**aumentar a produtividade** por meio da técnica Pomodoro — alternando períodos
de foco e descanso de forma simples e intuitiva.

---

## 🚀 Demonstração

🟢 **Deploy:** [Acesse o app no Vercel](https://chronos-pomo-timer.vercel.app/)

---

## 🧠 Sobre o Projeto

O **PomoTimer** foi projetado com foco em:

- **Produtividade:** um timer intuitivo e funcional para gerenciar ciclos de
  estudo e descanso.
- **Design limpo:** interface simples e moderna, com feedbacks visuais e
  notificações amigáveis.
- **Organização:** gerenciamento de tarefas com persistência de estado e
  histórico de sessões.

---

## 🛠️ Tecnologias Utilizadas

| Categoria        | Tecnologias                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Frontend**     | [React 19](https://react.dev/), [TypeScript 5.9](https://www.typescriptlang.org/), [Vite 7](https://vitejs.dev/) |
| **Estilo**       | CSS modularizado (`theme.css` e `global.css`)                                                                    |
| **Utilitários**  | [date-fns](https://date-fns.org/) para manipulação de datas                                                      |
| **Ícones**       | [Lucide React](https://lucide.dev/)                                                                              |
| **Notificações** | [React Toastify](https://fkhadra.github.io/react-toastify/introduction)                                          |
| **Roteamento**   | [React Router 7](https://reactrouter.com/)                                                                       |
| **Hospedagem**   | [Vercel](https://vercel.com/) (configurado via `vercel.json`)                                                    |

---

## 📁 Estrutura do Projeto

```bash
Chronos-PomoTimer/
│
├── src/
│   ├── components/
│   │   └── MessagesContainer/        # Exibe mensagens e notificações globais
│   ├── contexts/
│   │   └── TaskContext/              # Contexto global de tarefas e ciclos
│   ├── router/
│   │   └── MainRouter.tsx            # Sistema de rotas principais da aplicação
│   ├── styles/
│   │   ├── global.css                # Estilos globais
│   │   └── theme.css                 # Paleta de cores e temas
│   ├── App.tsx                       # Componente raiz
│   └── main.tsx                      # Ponto de entrada da aplicação
│
├── package.json                      # Dependências e scripts
├── tsconfig.node.json                # Configuração TypeScript para ambiente Node
├── vite.config.ts                    # Configuração do Vite com plugin React
├── vercel.json                       # Configuração de deploy para Vercel
└── README.md
```

---

## ⚙️ Scripts Disponíveis

| Comando           | Descrição                                         |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento              |
| `npm run build`   | Cria a build de produção                          |
| `npm run preview` | Pré-visualiza a versão de produção localmente     |
| `npm run lint`    | Executa o ESLint para verificar padrões de código |

---

## 🔧 Configuração do Projeto

### Requisitos

- **Node.js** v18+
- **npm** ou **yarn**

### Passos para rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Vitaosouzaa/Chronos-PomoTimer

# Acesse a pasta
cd Chronos-PomoTimer

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Após isso, abra [http://localhost:5173](http://localhost:5173) para ver o app no
navegador.

---

## 💡 Funcionalidades

✅ Timer Pomodoro com ciclos de **foco** e **pausa**  
✅ Gerenciamento de **tarefas**  
✅ Interface **responsiva e moderna**  
✅ **Notificações visuais e sonoras** ao final de cada ciclo  
✅ Persistência de dados (via contexto e local storage, se configurado)  
✅ Navegação fluida com React Router

---

## 🧩 Estrutura Principal do App

O componente `App.tsx` é o núcleo da aplicação, responsável por envolver todo o
conteúdo com os **providers** e containers globais:

```tsx
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './router/MainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
```

---

## 📦 Configuração de Build

O arquivo `vite.config.ts` define o ambiente do projeto com o plugin
**@vitejs/plugin-react-swc**, garantindo alta performance e suporte moderno a
JSX e TypeScript.

O `tsconfig.node.json` é otimizado para builds rápidas e com **checagem estrita
de tipos**, prevenindo erros comuns no desenvolvimento.

---

## ☁️ Deploy

O arquivo `vercel.json` configura o deploy automático na Vercel, com reescrita
de rotas para o React Router:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Isso permite o uso de rotas dinâmicas sem problemas de recarregamento no
navegador.

---

## 📜 Licença

Este projeto está sob a licença **MIT** — sinta-se livre para usar, modificar e
distribuir.

---

## 👨‍💻 Autor

**Vitor Souza**  
💼 Desenvolvedor Front-End em formação  
📘 Aprendendo React, TypeScript e Salesforce  
🔗 [LinkedIn](www.linkedin.com/in/vitorcaruso-dev)  
🌐 [GitHub](https://github.com/Vitaosouzaa)

---

> _"O tempo é o recurso mais valioso — Chronos te ajuda a usá-lo com
> propósito."_

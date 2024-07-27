# Projeto Api Paper Notes

![preview](./public/preview.webp)

## 💭 Descrição

Este projeto trata-se de uma API REST para um sistema de gerenciamento e compartilhamento de notas, semelhante ao Evernote. A API serve como o backend que permite aos clientes acessar e manipular as notas por meio de endpoints RESTful.

## 🧠 Funcionalidades

✔️ **Criação de Notas** - Os usuários podem criar notas com títulos e conteúdo.

✔️ **Edição de Notas** - A API suporta a edição de notas existentes, permitindo que os usuários atualizem o conteúdo, o título.

✔️ **Marcação de Notas como Concluídas** - Os usuários podem marcar as notas como "feitas" para indicar que uma tarefa ou objetivo foi concluído.

✔️ **Compartilhamento de Notas** - Os usuários têm a opção de compartilhar suas notas, tornando-as públicas para visualização por outros usuários da plataforma.

✔️ **Comentários em Notas** - Os usuários podem adicionar comentários às notas, permitindo discussões e interações relacionadas ao conteúdo das notas.

✔️ **Busca de Notas** - É possível buscar todas as notas ou uma nota por id do usuário logado, ou buscar uma nota por id de qualquer usuário caso a mesma seja pública.

✔️ **Exclusão de Notas** - Os usuários podem excluir notas que não são mais necessárias.

✔️ **Autenticação e Autorização** - A autenticação de usuários é tratada com Bcrypt e JsonWebToken, garantindo que apenas usuários autorizados possam acessar e manipular as notas.

## 🖥️ Tecnologias Utilizadas

- [Express](https://expressjs.com/pt-br) - framework para criação de aplicativos web.
- [TypeScript](https://www.typescriptlang.org) - superset, linguagem baseada em javascript
- [MongoDB](https://www.mongodb.com/pt-br) - banco de dados NoSQL
- [Mongoose](https://mongoosejs.com) - é uma biblioteca de modelagem de objetos.
- [Zod](https://zod.dev) - é uma biblioteca de validação e transformação
- [Prettier](https://prettier.io) - Formatador de código que mantém um estilo de código consistente.
- [ESLint](https://eslint.org) - Ferramenta de linting para identificar e corrigir problemas no código.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - é uma biblioteca de hash de senhas
- [JsonWebToken](https://jwt.io) - é um formato compacto e autenticado de representar informações em sistemas web para autenticação e autorização.
- [Swagger](https://swagger.io) - é uma estrutura de código aberto para a documentação, criação e teste de APIs REST.
- [EJS](https://ejs.co) - é uma linguagem de modelagem de templates para geração dinâmica de conteúdo web com JavaScript embutido.

## 📂 Esquema de pastas
```
./src
├── @types
│   └── express
├── app
│   ├── Comment
│   │   ├── dtos
│   │   ├── entity
│   │   ├── interfaces
│   │   └── schemas
│   ├── Note
│   │   ├── dtos
│   │   ├── entity
│   │   ├── interfaces
│   │   └── schemas
│   └── User
│       ├── dtos
│       ├── entity
│       ├── interfaces
│       └── schemas
├── database
│   └── models
├── helpers
│   ├── classes
│   ├── regex
│   └── schemas
├── middlewares
└── views
    └── includes
```

## 📝 Resumo da Estrutura
- **@types**: Contém definições de tipos personalizados para a aplicação, como para o express.
- **app**: Contém subpastas para diferentes módulos da aplicação. Cada modulo (por exemplo, Comment, Note, User) tem suas próprias pastas:
  - **modulo**
    - **dtos**: Objetos de Transferência de Dados.
    - **entity**: Entidades do banco de dados ou modelos.
    - **interfaces**: Interfaces TypeScript para a entidade.
    - **schemas**: Schemas de validação (por exemplo, para validação com class-validator).
    - **modulo-route.ts**
    - **modulo-controller.ts**
    - **modulo-service.ts**
    - **modulo-repository.ts**
    - **modulo-factory.ts**
- **database**: Contém modelos relacionados ao banco de dados.
- **helpers**: Inclui utilitários e helpers para a aplicação:
  - **classes**: Classes utilitárias ou de apoio.
  - **regex**: Expressões regulares úteis.
  - **schemas**: Schemas para validações de dados.
- **middlewares**: Contém middlewares personalizados para a aplicação.
- **views**: Contém arquivos de visualização e componentes visuais:
  - **includes**: Arquivos e componentes incluídos nas visualizações.

## 🛠️ Modificando o projeto

### Siga as seguintes instruções para instalar e poder modificar o projeto em sua máquina:

### 📋 Pré-requisitos:

Para baixar, executar e modificar o projeto, você precisa ter instalado em sua máquina:

- [Node](https://nodejs.org/en)
- [Docker](https://www.docker.com/products/docker-desktop)
- Um gerenciador de pacotes, como o [Npm](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
- Editor de código ou IDE, como o [VSCode](https://code.visualstudio.com/Download)

### 🔧 Instalação e execução

1. Clone o repositório

```bash
git clone https://github.com/aleretamero/api_paper-notes.git
```

2. Acesse a pasta do projeto

```bash
cd api_paper-notes
```

3. Instale as dependências

```bash
npm install
```


4. Copie o arquivo `.env.example` e crie um arquivo `.env` na raiz do projeto colocando as variáveis com os valores corretos:
```env
  PORT=3333
  NODE_ENV=development

  JWT_TOKEN=secret

  DB_URI=mongodb://root:root@localhost:27017
  DB_NAME=paper-notes
  DB_USERNAME=root
  DB_PASSWORD=root

  MONGO_EXPRESS_USERNAME=$DB_USERNAME
  MONGO_EXPRESS_PASSWORD=$DB_PASSWORD
  MONGO_EXPRESS_URL=mongodb://root:root@mongo:27017
```

 ***insira os valores das variáveis vazias.***

5. Crie o container no docker com

```bash
docker compose up -d
```

6. Inicie o servidor de desenvolvimento do projeto

```bash
npm run dev
```

## Colaboradores 🤝🤝

| Foto                                                       | Nome                                                 |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| <img src="https://github.com/aleretamero.png" width="100"> | [Alexandre Retamero](https://github.com/aleretamero) |

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

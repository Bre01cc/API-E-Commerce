# API de Gerenciamento de Produtos e Clientes
## Sobre
Este projeto é uma API RESTful desenvolvida como parte de uma atividade acadêmica na disciplina de Back-end. A API permite o gerenciamento completo de um catálogo de produtos e clientes, oferecendo operações de criação, leitura, atualização e exclusão (CRUD) para ambos.

## Tecnologias Utilizadas

- JavaScript: Linguagem principal para o desenvolvimento da API.
- Node.js: Ambiente de execução server-side para JavaScript.
- Express: Framework para Node.js que simplifica a criação de APIs RESTful.
- JSON: Formato utilizado para armazenamento e manipulação dos dados de produtos e clientes (arquivos produtos.json e clientes.json).

## Estrutura do Projeto

- O projeto está organizado em uma estrutura modular para facilitar manutenção e escalabilidade:

```
/project-root
├── src
│   ├── model
│   │   ├── modelProduto.js
│   │   │   # Lógica de manipulação dos dados de produtos
│   │   ├── modelCliente.js
│   │   │   # Lógica de manipulação dos dados de clientes
│   ├── controller
│   │   ├── produtosController.js
│   │   │   # Controladores para requisições de produtos
│   │   ├── clientesController.js
│   │   │   # Endpoints para produtos
│   ├── routes
│   │   ├── produtosRoutes.js
│   │   │   # Endpoints para clientes
│   │   ├── clientesjson
├── package.json
├── server.js
├── produtos.json
└── clientes.json
```
## Descrição das Pastas e Arquivos
- src/: Contém o código-fonte da aplicação, organizado em camadas (Model, Controller, Routes).
- model/: Gerencia a interação com os dados armazenados nos arquivos produtos.json e clientes.json, implementando operações CRUD para produtos e clientes.
- controller/: Processa as requisições HTTP, chamando as funções correspondentes do model e retornando respostas ao cliente.
- routes/: Define os endpoints da API e mapeia as requisições HTTP (GET, POST, PUT, DELETE) para os controladores apropriados.
- server.js: Arquivo principal que configura e inicializa o servidor Express, integrando as rotas de produtos e clientes.
- produtos.json: Armazena os dados dos produtos, funcionando como um banco de dados simples.
-clientes.json: Armazena os dados dos clientes, funcionando como um banco de dados simples.
## Imagens das requisições do produto

### Get 
- Buscar por ID
<img width="1454" height="863" alt="image" src="https://github.com/user-attachments/assets/60e351c7-9719-460a-b37e-ffc6c6bd8451" />

### Get
- Buscar todos os produtos
<img width="1465" height="862" alt="image" src="https://github.com/user-attachments/assets/ee3713b6-98f6-4511-aa9c-9b6626e19230" />

### Get 
- Buscar por nome
<img width="1469" height="801" alt="image" src="https://github.com/user-attachments/assets/c56895b7-faac-4b01-ae94-a07663bfb1c5" />

### Post 
- Para cadastrar novo produto
<img width="1466" height="762" alt="image" src="https://github.com/user-attachments/assets/6ba689fa-5840-45fe-8f62-046a9852998f" />

### Put 
- Para atualizar todoas as informações do produto
<img width="1470" height="716" alt="image" src="https://github.com/user-attachments/assets/0098cd81-11d5-410e-a88c-aebcdb233cc2" />

### Pach 
- Para alterar parcialmente
<img width="1474" height="710" alt="image" src="https://github.com/user-attachments/assets/4778c5b3-c744-44c2-bf71-ee4bb2be9c8b" />

### Delete 
- Para remover o item
<img width="1478" height="857" alt="image" src="https://github.com/user-attachments/assets/4f8f7923-e42c-48f7-baab-c9665577dd4f" />

## Autor
- [Breno Oliveira](https://www.linkedin.com/in/breno-oliveira-assis-reis-203010351/).






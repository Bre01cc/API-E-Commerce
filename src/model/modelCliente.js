let clientes = [
  {
    "id": 1,
    "nome": "Ana Carolina Souza",
    "email": "ana.souza@email.com",
    "telefone": "(11) 91234-5678",
    "endereco": "Rua das Flores, 120 - Jardim Paulista, São Paulo - SP, 01434-000",
    "dataCadastro": "2025-01-15T10:30:00",
    "ativo": true
  },
  {
    "id": 2,
    "nome": "João Pedro Oliveira",
    "email": "joao.oliveira@email.com",
    "telefone": "(21) 99876-5432",
    "endereco": "Av. Atlântica, 4500 - Copacabana, Rio de Janeiro - RJ, 22070-000",
    "dataCadastro": "2025-02-02T14:15:00",
    "ativo": true
  },
  {
    "id": 3,
    "nome": "Mariana Santos",
    "email": "mariana.santos@email.com",
    "telefone": "(31) 92345-6789",
    "endereco": "Rua Minas Gerais, 88 - Savassi, Belo Horizonte - MG, 30130-000",
    "dataCadastro": "2025-02-20T09:45:00",
    "ativo": false
  },
  {
    "id": 4,
    "nome": "Carlos Alberto Ferreira",
    "email": "carlos.ferreira@email.com",
    "telefone": "(41) 93456-7890",
    "endereco": "Rua XV de Novembro, 1000 - Centro, Curitiba - PR, 80020-310",
    "dataCadastro": "2025-03-01T16:20:00",
    "ativo": true
  },
  {
    "id": 5,
    "nome": "Fernanda",
    "email": "fernanda.lima@email.com",
    "telefone": "(51) 97654-3210",
    "endereco": "Av. Ipiranga, 2000 - Azenha, Porto Alegre - RS, 90160-092",
    "dataCadastro": "2025-03-18T11:10:00",
    "ativo": true
  }
];

//Listar todos os clientes
const findClientAll = () => {
  return clientes;
}
//Buscar por id
const findClientId = (id) => {
  return clientes.find(cliente => cliente.id === id)

}
//Buscar cliente por nome
const findClientNome = (nome) => {
  return clientes.find(cliente => cliente.nome === nome)
}
const creatCliente = (newClient) => {
  const newId = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1;

  const client = { id: newId, ...newClient }

  clientes.push(client)

  return client;
}

const deletarCliente = (id) => {
  if (clientes.find(cliente => cliente.id === id)) {
    let i = clientes.findIndex(cliente => cliente.id === id)
    clientes.splice(i, 1);
    return clientes
  } else {
    return "id enviado não existe"
  }
}
const alterarCliente = (id, newDados) => {
  let posicao = clientes.findIndex(cliente => cliente.id === id)

  clientes.splice(posicao, 1);
  const client = { id, ...newDados }
  clientes.splice(posicao, 0, client)

  return clientes
}
const alterarParcialmente=(id,clientela)=>{
  const posicao = clientes.findIndex(cliente => cliente.id === id)

  clientes[posicao]={
    ...clientes[posicao],
    ...clientela
  }
  return clientes[posicao]
}
// console.log(alterarParcialmente(1,
//   {"nome":"Neymar jr"}))

// console.log(findClientId(1))

module.exports = {
  findClientAll,
  findClientId,
  creatCliente,
  findClientNome,
  deletarCliente,
  alterarCliente,
  alterarParcialmente
}



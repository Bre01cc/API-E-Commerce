let produtos = [
    {
        "id": 1,
        "nome": "Notebook Dell Inspiron 15",
        "descricao": "Notebook com processador Intel i5, 8GB RAM e 256GB SSD.",
        "preco": 3499.90,
        "categoria": "Informática",
        "estoque": 12,
        "ativo": true
    },
    {
        "id": 2,
        "nome": "Smartphone Samsung Galaxy S23",
        "descricao": "Celular com tela AMOLED 6.1'', 128GB e câmera tripla.",
        "preco": 4299.00,
        "categoria": "Eletrônicos",
        "estoque": 8,
        "ativo": true
    },
    {
        "id": 3,
        "nome": "Cafeteira Expresso Nespresso",
        "descricao": "Máquina de café expresso com cápsulas.",
        "preco": 699.00,
        "categoria": "Eletrodomésticos",
        "estoque": 5,
        "ativo": false
    },
    {
        "id": 4,
        "nome": "Fone de Ouvido Bluetooth JBL",
        "descricao": "Headset sem fio com bateria de até 20h.",
        "preco": 399.90,
        "categoria": "Áudio",
        "estoque": 25,
        "ativo": true
    },
    {
        "id": 5,
        "nome": "Cadeira Gamer Redragon",
        "descricao": "Cadeira ergonômica com ajuste de altura e apoio lombar.",
        "preco": 1299.00,
        "categoria": "Móveis",
        "estoque": 7,
        "ativo": true
    }
];
const findProdAll = () => {
    return produtos;
}
//Buscar por id
const findProdId = (id) => {
    return produtos.find(produtos => produtos.id === id)
}

//Buscar cliente por nome
const findProdNome = (nome) => {
    return produtos.find(produtos => produtos.nome === nome)
}

const creatProduto = (newProdutos) => {
    const newId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;

    const produto = { id: newId, ...newProdutos }

    produtos.push(produto)

    return produto;
}


const deletarCliente = (id) => {
    if (produtos.find(produtos => produtos.id === id)) {
        let i = produtos.findIndex(produtos => produtos.id === id)
        produtos.splice(i, 1);
        return produtos
    } else {
        return "id enviado não existe"
    }
}
const alterarProdutos = (id, newDados) => {
    let posicao = produtos.findIndex(produtos => produtos.id === id)

    produtos.splice(posicao, 1);
    const produto = { id, ...newDados }
    produtos.splice(posicao, 0, client)

    return produtos
}
const alterarParcialmente = (id, produtela) => {
    const posicao = produtos.findIndex(produtos => produtos.id === id)

    produtos[posicao] = {
        ...produtos[posicao],
        ...produtela
    }
    return produtos[posicao]
}
// console.log(alterarParcialmente(1,
//   {"nome":"Neymar jr"}))

// console.log(findClientId(1))

module.exports = {
    findProdAll,
    findProdId,
    findProdNome,
    alterarProdutos,
    creatProduto,
    deletarCliente,
    alterarParcialmente
}
const modelProdutos = require('../model/modelProduto')

const getAllProdutos = (req, res) => {
    const produto = modelProdutos.findProdAll;
    res.status(200).json(produto)
}
const getAllProdutosId = (req, res) => {
    const id = parseInt(req.params.id);

    const produto = modelProdutos.findClientId(id)
    if (produto) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

const getAllNome = (req, res) => {
     const nome = req.params.nome
        const cliente = modelProdutos.findProdNome(nome)
        if (cliente) {
            //Responder com status code de 200(Sucesso!)
            res.status(200).json(cliente);
        } else {
            res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
        }
}
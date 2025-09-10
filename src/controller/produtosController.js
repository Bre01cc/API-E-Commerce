const modelProdutos = require('../model/modelProduto')

//Função responsável por receber as requisições do tipo GET
//Sua resposta é a lista de produtos
const getAllProdutos = (req, res) => {
    const produto = modelProdutos.findProdAll();
    res.status(200).json(produto);
}
//Função 
const getAllProdutosId = (req, res) => {
    const id = parseInt(req.params.id);

    const produto = modelProdutos.findProdId(id)
    if (produto) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(produto);
    } else {
        res.status(400).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
}

const getAllNome = (req, res) => {
    const nome = req.params.nome
    const produto = modelProdutos.findProdNome(nome)
    if (produto) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(produto);
    } else {
        res.status(400).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
}
const creatProduto = (req, res) => {

    const { nome, descricao, preco, categoria, estoque, ativo } = req.body

    if (!nome || !descricao || !preco || !categoria || !estoque || !ativo) {
        return res.status(400).json({
            mensagem: "Envie todas as informações do produto"
        })

    } else {
        const produto = modelProdutos.creatProduto({ nome, descricao, preco, categoria, estoque, ativo })
        return res.status(200).json(produto)
    }
}
const produtoDelete = (req, res) => {
    const id = parseInt(req.params.id);

    const produto = modelProdutos.deletarProduto(id)
    if (produto) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(produto);
    } else {
        res.status(400).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
}
const alterarProdutos = (req, res) => {
    const id = parseInt(req.params.id);

    const { nome, descricao, preco, categoria, estoque, ativo } = req.body

    if (!nome || !descricao || !preco || !categoria || !estoque || !ativo) {
        return res.status(400).json({
            mensagem: "Envie todas as informações do produto"
        })
    } else {
        const produto = modelProdutos.alterarProdutos({ nome, descricao, preco, categoria, estoque, ativo })
        return res.status(200).json(produto);
    }
}
const alterarParcialmente = (req, res) => {
    const id = parseInt(req.params.id);
    const itens = req.body
    const produto = modelProdutos.alterarParcialmente(id, itens)
    if (produto) {
        return res.status(200).json(produto)
    
    } else {
        return res.status(400).json({
            mensagem: "Envie todas as informações do produto"
        })
       
    }

}
module.exports = {
    getAllProdutos,
    getAllProdutosId,
    getAllNome,
    creatProduto,
    alterarProdutos,
    produtoDelete,
    alterarParcialmente
}

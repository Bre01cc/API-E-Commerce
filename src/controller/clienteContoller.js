
const clienteModel = require('../model/modelCliente')

const getAllCliente = (req, res) => {
    const cliente = clienteModel.findClientAll();
    res.status(200).json(cliente)
}
const getAllClienteId = (req, res) => {
    const id = parseInt(req.params.id);

    const cliente = clienteModel.findClientId(id)
    if (cliente) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}
const getAllNome = (req, res) => {
    const nome = req.params.nome
    const cliente = clienteModel.findClientNome(nome)
    if (cliente) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

const creatCliente = (req, res) => {
    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body;

    if (!nome || !email || !telefone || !endereco || !dataCadastro || !ativo) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios'
        })

    } else {
        const newUser = clienteModel.creatCliente({ nome, email, telefone, endereco, dataCadastro, ativo })
        res.status(201).json(newUser);
    }
}

const deleteCliente = (req, res) => {
    const id = parseInt(req.params.id);

    const cliente = clienteModel.deletarCliente(id)

    if (cliente) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}
const alterarTodosCampos = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body;

    if (!nome || !email || !telefone || !endereco || !dataCadastro || !ativo) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios'
        })

    } else {
        const newUser = clienteModel.alterarCliente(id,{ nome, email, telefone, endereco, dataCadastro, ativo })
        res.status(201).json(newUser);
    }

}
const alterarParcialmente = (req, res) => {
    const id = parseInt(req.params.id);
    const itens = req.body

    const cliente = clienteModel.alterarParcialmente(id, itens)
    if (cliente) {
        //Responder com status code de 200(Sucesso!)
        res.status(200).json(cliente);
    } else {
        res.status(400).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
}

module.exports = {
    getAllCliente,
    getAllClienteId,
    getAllNome,
    alterarParcialmente,
    alterarTodosCampos,
    deleteCliente,
    creatCliente
}
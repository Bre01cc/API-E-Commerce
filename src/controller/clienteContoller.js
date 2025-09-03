
const clienteModel = require('../model/modelCliente')

const getAllCliente =(req,res)=>{
    const cliente = clienteModel.findClientAll();
    res.status(200).json(cliente)
}
const getAllClienteId = (req,res)=>{

}
module.exports={
    getAllCliente
}
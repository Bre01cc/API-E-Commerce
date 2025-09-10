const express = require('express');
const router = express.Router();

const produtoController=require('../controller/produtosController');

router.get('/',produtoController.getAllProdutos);
router.get('/:id',produtoController.getAllProdutosId);
router.get('//:nome',produtoController.getAllNome);
router.post('/',produtoController.creatProduto);
router.put('/:id',produtoController.alterarProdutos);
router.patch('/:id',produtoController.alterarParcialmente);
router.delete('/:id',produtoController.produtoDelete);

module.exports= router;
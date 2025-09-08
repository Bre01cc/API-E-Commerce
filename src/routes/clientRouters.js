const express = require('express');
const router = express.Router();

const clientController = require('../controller/clienteContoller');

router.get('/',clientController.getAllCliente);
router.get('/:id',clientController.getAllClienteId);
router.get('//:nome',clientController.getAllNome);
router.post('/',clientController.creatCliente);
router.delete('/:id',clientController.deleteCliente);
router.put('/:id',clientController.alterarTodosCampos);
router.patch('/:id',clientController.alterarParcialmente);
// router.get('/',clientController.);

module.exports = router;
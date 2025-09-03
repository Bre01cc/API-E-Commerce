const express = require('express');
const router = express.Router();

const clientController = require('../controller/clienteContoller');

router.get('/',clientController.getAllCliente);

module.exports = router;
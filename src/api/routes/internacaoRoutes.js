const express = require('express');
const router = express.Router();

const internacaoControllers = require('../controllers/internacaoControllers');

router.get('/internacao', internacaoControllers.index);
router.post('/internacao', internacaoControllers.store);
router.put('/internacao/:codigo', internacaoControllers.update);
router.delete('/internacao/:codigo', internacaoControllers.delete);

module.exports = router;

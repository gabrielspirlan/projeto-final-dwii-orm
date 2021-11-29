const express = require('express');
const router = express.Router();

const guiaexameControllers = require('../controllers/guiaexameControllers');

router.get('/guiaexame', guiaexameControllers.index);
router.post('/guiaexame', guiaexameControllers.store);
router.put('/guiaexame/:codigo', guiaexameControllers.update);
router.delete('/guiaexame/:codigo', guiaexameControllers.delete);

module.exports = router;

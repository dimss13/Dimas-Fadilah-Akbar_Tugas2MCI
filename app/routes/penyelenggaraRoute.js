const router = require('express').Router();
const penyelenggaraController = require('../controller/penyelenggaraController');

router.get('/', penyelenggaraController.getAllPenyelenggara);
router.get('/:id', penyelenggaraController.getPenyelenggaraByID);
router.post('/', penyelenggaraController.createPenyelenggara);
router.put('/:id', penyelenggaraController.updatePenyelenggara);
router.delete('/:id', penyelenggaraController.deletePenyelenggara);

module.exports = router;
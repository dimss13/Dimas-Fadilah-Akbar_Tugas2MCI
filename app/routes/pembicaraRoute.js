const router = require('express').Router();
const pembicaraController = require('../controller/pembicaraController');

router.get('/', pembicaraController.getAllPembicara);
router.get('/:id', pembicaraController.getPembicaraByID);
router.post('/', pembicaraController.createPembicara);
router.put('/:id', pembicaraController.updatePembicara);
router.delete('/:id', pembicaraController.deletePembicara);

module.exports = router;
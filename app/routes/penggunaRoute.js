const router = require('express').Router();
const penggunaController = require('../controller/penggunaController');

router.get('/', penggunaController.getAllPengguna);
router.get('/:id', penggunaController.getPenggunaByID);
router.post('/', penggunaController.createPengguna);
router.put('/:id', penggunaController.updatePengguna);
router.delete('/:id', penggunaController.deletePengguna);

module.exports = router;
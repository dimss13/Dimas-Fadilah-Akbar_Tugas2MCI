const router = require('express').Router();
const tempatDudukController = require('../controller/tempatDudukController');

router.get('/', tempatDudukController.getAllTempatDuduk);
router.get('/:id', tempatDudukController.getTempatDudukByID);
router.post('/', tempatDudukController.createTempatDuduk);
router.put('/:id', tempatDudukController.updateTempatDuduk);
router.delete('/:id', tempatDudukController.deleteTempatDuduk);

module.exports = router;
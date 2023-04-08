const router = require('express').Router();
const acaraSeminarController = require('../controller/acaraseminarController');

router.get('/', acaraSeminarController.getAllAcaraSeminar);
router.get('/:id', acaraSeminarController.getAcaraSeminarById);
router.post('/', acaraSeminarController.createAcaraSeminar);
router.put('/:id', acaraSeminarController.updateAcaraSeminar);
router.delete('/:id', acaraSeminarController.deleteAcaraSeminar);

module.exports = router;
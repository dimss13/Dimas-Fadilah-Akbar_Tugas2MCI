const router = require('express').Router();
const pendaftaranController = require('../controller/pendaftaranController');

router.get('/', pendaftaranController.getAllPendaftaran);
router.get('/:id', pendaftaranController.getPendaftaranByID);
router.post('/', pendaftaranController.createPendaftaran);
router.put('/:id', pendaftaranController.updatePendaftaran);
router.delete('/:id', pendaftaranController.deletePendaftaran);

module.exports = router;
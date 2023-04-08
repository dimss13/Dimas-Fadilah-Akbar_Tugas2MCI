const router = require('express').Router();
const pembayaranController = require('../controller/pembayaranController');

router.get('/', pembayaranController.getAllPembayaran);
router.get('/:id', pembayaranController.getPembayaranByID);
router.post('/', pembayaranController.createPembayaran);
router.put('/:id', pembayaranController.updatePembayaran);
router.delete('/:id', pembayaranController.deletePembayaran);

module.exports = router;
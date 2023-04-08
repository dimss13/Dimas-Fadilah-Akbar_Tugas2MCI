const pembayaranService = require('../services/pembayaranService')

const getAllPembayaran = async (req, res) => {
    pembayaranService.getAllPembayaran()
    .then(pembayarans => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data pembayaran',
        data: pembayarans,
      })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const getPembayaranByID = async (req, res) =>
{
  const id = req.params.id;
  const pembayaran = pembayaranService.getPembayaranByID(req.params.id)
  .then((pembayaran) => {
    if (!pembayaran)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data pembayaran tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data pembayaran ditemukan',
          data: pembayaran
        }
      );
    }
  }).catch((err) => {
    res.status(500).send(
      {
        status: 'error',
        message: err.message,
        data: {}
      }
    );
  }); 
}

const createPembayaran = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  pembayaranService.createPembayaran(req.body)
  .then((pembayaran) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pembayaran berhasil ditambahkan',
        data: pembayaran
      }
    );
  }).catch((err) => {
    res.status(500).send(
      {
        status: 'error',
        message: err.message,
        data: {}
      }
    )
  });
}

const updatePembayaran = async(req, res) =>
{
  const id = req.params.id;
  pembayaranService.updatePembayaran(req.body, id)
  .then((pembayaran) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pembayaran berhasil diUpate',
        data: pembayaran
      }
    )
  }).catch((err) => {
    res.status(500).send(
      {
        status: 'error',
        message: err.message,
        data: {}
      }
    )
  });
}

const deletePembayaran = async (req, res) =>
{
  const id = req.params.id;
  pembayaranService.deletePembayaran(id)
  .then((pembayaran) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: pembayaran
      }
    )
  }).catch((err) => {
    res.status(500).send(
      {
        status: 'error',
        message: err.message,
        data: {}
      }
    )
  });
}

module.exports = 
{
  getAllPembayaran,
  getPembayaranByID,
  createPembayaran,
  updatePembayaran,
  deletePembayaran
}
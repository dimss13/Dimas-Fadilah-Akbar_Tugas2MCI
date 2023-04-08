const pendaftaranService = require('../services/pendaftaranService')

const getAllPendaftaran = async (req, res) => {
    pendaftaranService.getAllPendaftaran()
    .then(pendaftarans => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data pendaftaran',
        data: pendaftarans,
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

const getPendaftaranByID = async (req, res) =>
{
  const id = req.params.id;
  const pendaftaran = pendaftaranService.getPendaftaranByID(req.params.id)
  .then((pendaftaran) => {
    if (!pendaftaran)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data pendaftaran tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data pendaftaran ditemukan',
          data: pendaftaran
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

const createPendaftaran = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  pendaftaranService.createPendaftaran(req.body)
  .then((pendaftaran) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pendaftaran berhasil ditambahkan',
        data: pendaftaran
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

const updatePendaftaran = async(req, res) =>
{
  const id = req.params.id;
  pendaftaranService.updatePendaftaran(req.body, id)
  .then((pendaftaran) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pendaftaran berhasil diUpate',
        data: pendaftaran
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

const deletePendaftaran = async (req, res) =>
{
  const id = req.params.id;
  pendaftaranService.deletePendaftaran(id)
  .then((pendaftaran) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: pendaftaran
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
  getAllPendaftaran,
  getPendaftaranByID,
  createPendaftaran,
  updatePendaftaran,
  deletePendaftaran
}
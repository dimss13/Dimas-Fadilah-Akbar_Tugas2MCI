const penggunaService = require('../services/peggunaService')

const getAllPengguna = async (req, res) => {
    penggunaService.getAllPengguna()
    .then(penggunas => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data pengguna',
        data: penggunas,
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

const getPenggunaByID = async (req, res) =>
{
  const id = req.params.id;
  const pengguna = penggunaService.getPenggunaByID(req.params.id)
  .then((pengguna) => {
    if (!pengguna)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data pengguna tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data pengguna ditemukan',
          data: pengguna
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

const createPengguna = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  penggunaService.createPengguna(req.body)
  .then((pengguna) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pengguna berhasil ditambahkan',
        data: pengguna
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

const updatePengguna = async(req, res) =>
{
  const id = req.params.id;
  penggunaService.updatePengguna(req.body, id)
  .then((pengguna) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pengguna berhasil diUpate',
        data: pengguna
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

const deletePengguna = async (req, res) =>
{
  const id = req.params.id;
  penggunaService.deletePengguna(id)
  .then((pengguna) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: pengguna
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
  getAllPengguna,
  getPenggunaByID,
  createPengguna,
  updatePengguna,
  deletePengguna
}
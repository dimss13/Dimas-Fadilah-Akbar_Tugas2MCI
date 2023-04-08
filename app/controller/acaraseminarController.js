const acaraSeminarService = require('../services/acaraseminarService')

const getAllAcaraSeminar = async (req, res) => {
    acaraSeminarService.getAllAcaraSeminar()
    .then(acaraseminars => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data seminar',
        data: acaraseminars,
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

const getAcaraSeminarById = async (req, res) =>
{
  const id = req.params.id;
  const acaraSeminar = acaraSeminarService.getAcaraSeminarById(req.params.id)
  .then((acaraSeminar) => {
    if (!acaraSeminar)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data acaraSeminar tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data acaraSeminar ditemukan',
          data: acaraSeminar
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

const createAcaraSeminar = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  acaraSeminarService.createAcaraSeminar(req.body)
  .then((acaraSeminar) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data acaraSeminar berhasil ditambahkan',
        data: acaraSeminar
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

const updateAcaraSeminar = async(req, res) =>
{
  const id = req.params.id;
  acaraSeminarService.updateAcaraSeminar(req.body, id)
  .then((acaraSeminar) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data acaraSeminar berhasil diUpate',
        data: acaraSeminar
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

const deleteAcaraSeminar = async (req, res) =>
{
  const id = req.params.id;
  acaraSeminarService.deleteAcaraSeminar(id)
  .then((acaraSeminar) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: acaraSeminar
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
  getAllAcaraSeminar,
  getAcaraSeminarById,
  createAcaraSeminar,
  updateAcaraSeminar,
  deleteAcaraSeminar
}
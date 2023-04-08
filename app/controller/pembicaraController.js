const pembicaraService = require('../services/pembicaraService')

const getAllPembicara = async (req, res) => {
    pembicaraService.getAllPembicara()
    .then(pembicaras => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data pembicara',
        data: pembicaras,
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

const getPembicaraByID = async (req, res) =>
{
  const id = req.params.id;
  const pembicara = pembicaraService.getPembicaraByID(req.params.id)
  .then((pembicara) => {
    if (!pembicara)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data pembicara tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data pembicara ditemukan',
          data: pembicara
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

const createPembicara = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  pembicaraService.createPembicara(req.body)
  .then((pembicara) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pembicara berhasil ditambahkan',
        data: pembicara
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

const updatePembicara = async(req, res) =>
{
  const id = req.params.id;
  pembicaraService.updatePembicara(req.body, id)
  .then((pembicara) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data pembicara berhasil diUpate',
        data: pembicara
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

const deletePembicara = async (req, res) =>
{
  const id = req.params.id;
  pembicaraService.deletePembicara(id)
  .then((pembicara) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: pembicara
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
  getAllPembicara,
  getPembicaraByID,
  createPembicara,
  updatePembicara,
  deletePembicara
}
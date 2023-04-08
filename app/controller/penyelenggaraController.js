const penyelenggaraService = require('../services/penyelenggaraService')

const getAllPenyelenggara = async (req, res) => {
    penyelenggaraService.getAllPenyelenggara()
    .then(penyelenggaras => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data penyelenggara',
        data: penyelenggaras,
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

const getPenyelenggaraByID = async (req, res) =>
{
  const id = req.params.id;
  const penyelenggara = penyelenggaraService.getPenyelenggaraByID(req.params.id)
  .then((penyelenggara) => {
    if (!penyelenggara)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data penyelenggara tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data penyelenggara ditemukan',
          data: penyelenggara
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

const createPenyelenggara = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  penyelenggaraService.createPenyelenggara(req.body)
  .then((penyelenggara) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data penyelenggara berhasil ditambahkan',
        data: penyelenggara
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

const updatePenyelenggara = async(req, res) =>
{
  const id = req.params.id;
  penyelenggaraService.updatePenyelenggara(req.body, id)
  .then((penyelenggara) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data penyelenggara berhasil diUpate',
        data: penyelenggara
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

const deletePenyelenggara = async (req, res) =>
{
  const id = req.params.id;
  penyelenggaraService.deletePenyelenggara(id)
  .then((penyelenggara) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: penyelenggara
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
  getAllPenyelenggara,
  getPenyelenggaraByID,
  createPenyelenggara,
  updatePenyelenggara,
  deletePenyelenggara
}
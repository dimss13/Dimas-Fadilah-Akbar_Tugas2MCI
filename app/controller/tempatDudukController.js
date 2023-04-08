const tempatdudukService = require('../services/tempatDudukService')

const getAllTempatDuduk = async (req, res) => {
    tempatdudukService.getAllTempatDuduk()
    .then(tempatduduks => {
      res.status(200).json({
        status: 'success',
        message: 'Success get all data tempat duduk',
        data: tempatduduks,
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

const getTempatDudukByID = async (req, res) =>
{
  const id = req.params.id;
  const tempatduduk = tempatdudukService.getTempatDudukByID(req.params.id)
  .then((tempatduduk) => {
    if (!tempatduduk)
    {
      res.status(404).send(
        {
          status: 'error',
          message: 'Data tempatduduk tidak ditemukan',
          data: {}
        }
      );
    }
    else 
    {
      res.status(200).send(
        {
          status: 'success',
          message: 'Data tempatduduk ditemukan',
          data: tempatduduk
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

const createTempatDuduk = async (req, res) =>
{
  // const data = 
  // {
  //   nama: req.body.nama,
  //   nrp: req.body.nrp,
  //   jurusan: req.body.jurusan,
  //   umur: req.body.umur
  // }
  tempatdudukService.createTempatDuduk(req.body)
  .then((tempatduduk) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data tempatduduk berhasil ditambahkan',
        data: tempatduduk
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

const updateTempatDuduk = async(req, res) =>
{
  const id = req.params.id;
  tempatdudukService.updateTempatDuduk(req.body, id)
  .then((tempatduduk) => {
    res.status(200).send(
      {
        status: 'success',
        message: 'Data tempatduduk berhasil diUpate',
        data: tempatduduk
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

const deleteTempatDuduk = async (req, res) =>
{
  const id = req.params.id;
  tempatdudukService.deleteTempatDuduk(id)
  .then((tempatduduk) => {
    res.status(200).send(
      {
         status: 'success',
         message: 'Data berhasil di hapus',
         data: tempatduduk
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
  getAllTempatDuduk,
  getTempatDudukByID,
  createTempatDuduk,
  updateTempatDuduk,
  deleteTempatDuduk
}
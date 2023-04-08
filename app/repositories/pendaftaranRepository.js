const {pendaftaran} = require('../models');


const getAllPendaftaran = () => 
{
  return pendaftaran.findAll();
}

const getPendaftaranByID = (id) => 
{
  return pendaftaran.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create pendaftaran
const createPendaftaran = (data) =>
{
  return pendaftaran.create(data);
}

const updatePendaftaran = (data, id) => 
{
  return pendaftaran.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deletePendaftaran = (id) =>
{
  return pendaftaran.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllPendaftaran,
  getPendaftaranByID,
  updatePendaftaran,
  createPendaftaran,
  deletePendaftaran
}
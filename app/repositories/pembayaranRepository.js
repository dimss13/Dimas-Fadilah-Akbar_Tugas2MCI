const {pembayaran} = require('../models');


const getAllPembayaran = () => 
{
  return pembayaran.findAll();
}

const getPembayaranByID = (id) => 
{
  return pembayaran.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create pembayaran
const createPembayaran = (data) =>
{
  return pembayaran.create(data);
}

const updatePembayaran = (data, id) => 
{
  return pembayaran.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deletePembayaran = (id) =>
{
  return pembayaran.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllPembayaran,
  getPembayaranByID,
  updatePembayaran,
  createPembayaran,
  deletePembayaran
}
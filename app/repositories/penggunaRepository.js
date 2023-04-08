const {pengguna} = require('../models');


const getAllPengguna = () => 
{
  return pengguna.findAll();
}

const getPenggunaByID = (id) => 
{
  return pengguna.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create pengguna
const createPengguna = (data) =>
{
  return pengguna.create(data);
}

const updatePengguna = (data, id) => 
{
  return pengguna.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deletePengguna = (id) =>
{
  return pengguna.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllPengguna,
  getPenggunaByID,
  updatePengguna,
  createPengguna,
  deletePengguna
}
// const acaraSeminar = require('../models/acaraSeminar');
const penggunaRepository = require('../repositories/penggunaRepository');

const getAllPengguna = async () => 
{
  try 
  {
    const penggunas = await penggunaRepository.getAllPengguna();
    return penggunas;
  }
  catch (err)
  {
    return err;
  }
}

const getPenggunaByID = async (id) =>
{
  try
  {
    const pengguna = await penggunaRepository.getPenggunaByID(id);
    return pengguna;
  }
  catch (err)
  {
    return err;
  }
}

const createPengguna = async (data) =>
{
  try
  {
    const pengguna = await penggunaRepository.createPengguna(data);
    return pengguna;
  }
  catch (err)
  {
    return err; 
  }
}

const updatePengguna = async (data, id) =>
{
  try
  {
    const pengguna = await penggunaRepository.updatePengguna(data, id);
    return pengguna;
  }
  catch (err)
  {
    return err;
  }
}

const deletePengguna = async (id) =>
{
  try
  {
    const pengguna = await penggunaRepository.deletePengguna(id);
    return pengguna;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllPengguna,
  getPenggunaByID,
  createPengguna,
  updatePengguna,
  deletePengguna
}
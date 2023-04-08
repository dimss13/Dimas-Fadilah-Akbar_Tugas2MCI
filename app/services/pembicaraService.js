// const acaraSeminar = require('../models/acaraSeminar');
const pembicaraRepository = require('../repositories/pembicaraRepository');

const getAllPembicara = async () => 
{
  try 
  {
    const pembicaras = await pembicaraRepository.getAllPembicara();
    return pembicaras;
  }
  catch (err)
  {
    return err;
  }
}

const getPembicaraByID = async (id) =>
{
  try
  {
    const pembicara = await pembicaraRepository.getPembicaraByID(id);
    return pembicara;
  }
  catch (err)
  {
    return err;
  }
}

const createPembicara = async (data) =>
{
  try
  {
    const pembicara = await pembicaraRepository.createPembicara(data);
    return pembicara;
  }
  catch (err)
  {
    return err; 
  }
}

const updatePembicara = async (data, id) =>
{
  try
  {
    const pembicara = await pembicaraRepository.updatePembicara(data, id);
    return pembicara;
  }
  catch (err)
  {
    return err;
  }
}

const deletePembicara = async (id) =>
{
  try
  {
    const pembicara = await pembicaraRepository.deletePembicara(id);
    return pembicara;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllPembicara,
  getPembicaraByID,
  createPembicara,
  updatePembicara,
  deletePembicara
}
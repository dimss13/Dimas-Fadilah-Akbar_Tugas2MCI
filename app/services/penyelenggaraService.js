// const acaraSeminar = require('../models/acaraSeminar');
const penyelenggaraRepository = require('../repositories/penyelenggaraRepository');

const getAllPenyelenggara = async () => 
{
  try 
  {
    const penyelenggaras = await penyelenggaraRepository.getAllPenyelenggara();
    return penyelenggaras;
  }
  catch (err)
  {
    return err;
  }
}

const getPenyelenggaraByID = async (id) =>
{
  try
  {
    const penyelenggara = await penyelenggaraRepository.getPenyelenggaraByID(id);
    return penyelenggara;
  }
  catch (err)
  {
    return err;
  }
}

const createPenyelenggara = async (data) =>
{
  try
  {
    const penyelenggara = await penyelenggaraRepository.createPenyelenggara(data);
    return penyelenggara;
  }
  catch (err)
  {
    return err; 
  }
}

const updatePenyelenggara = async (data, id) =>
{
  try
  {
    const penyelenggara = await penyelenggaraRepository.updatePenyelenggara(data, id);
    return penyelenggara;
  }
  catch (err)
  {
    return err;
  }
}

const deletePenyelenggara = async (id) =>
{
  try
  {
    const penyelenggara = await penyelenggaraRepository.deletePenyelenggara(id);
    return penyelenggara;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllPenyelenggara,
  getPenyelenggaraByID,
  createPenyelenggara,
  updatePenyelenggara,
  deletePenyelenggara
}
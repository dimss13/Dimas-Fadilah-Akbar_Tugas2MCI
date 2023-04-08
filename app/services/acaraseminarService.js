// const acaraSeminar = require('../models/acaraSeminar');
const acaraSeminarRepository = require('../repositories/acaraseminarRepository');

const getAllAcaraSeminar = async () => 
{
  try 
  {
    const acaraseminars = await acaraSeminarRepository.getAllAcaraSeminar();
    return acaraseminars;
  }
  catch (err)
  {
    return err;
  }
}

const getAcaraSeminarById = async (id) =>
{
  try
  {
    const acaraSeminar = await acaraSeminarRepository.getAcaraSeminarById(id);
    return acaraSeminar;
  }
  catch (err)
  {
    return err;
  }
}

const createAcaraSeminar = async (data) =>
{
  try
  {
    const acaraSeminar = await acaraSeminarRepository.createAcaraSeminar(data);
    return acaraSeminar;
  }
  catch (err)
  {
    return err; 
  }
}

const updateAcaraSeminar = async (data, id) =>
{
  try
  {
    const acaraSeminar = await acaraSeminarRepository.updateAcaraSeminar(data, id);
    return acaraSeminar;
  }
  catch (err)
  {
    return err;
  }
}

const deleteAcaraSeminar = async (id) =>
{
  try
  {
    const acaraSeminar = await acaraSeminarRepository.deleteAcaraSeminar(id);
    return acaraSeminar;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllAcaraSeminar,
  getAcaraSeminarById,
  createAcaraSeminar,
  updateAcaraSeminar,
  deleteAcaraSeminar
}
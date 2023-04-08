// const acaraSeminar = require('../models/acaraSeminar');
const pendaftaranRepository = require('../repositories/pendaftaranRepository');

const getAllPendaftaran = async () => 
{
  try 
  {
    const pendaftarans = await pendaftaranRepository.getAllPendaftaran();
    return pendaftarans;
  }
  catch (err)
  {
    return err;
  }
}

const getPendaftaranByID = async (id) =>
{
  try
  {
    const pendaftaran = await pendaftaranRepository.getPendaftaranByID(id);
    return pendaftaran;
  }
  catch (err)
  {
    return err;
  }
}

const createPendaftaran = async (data) =>
{
  try
  {
    const pendaftaran = await pendaftaranRepository.createPendaftaran(data);
    return pendaftaran;
  }
  catch (err)
  {
    return err; 
  }
}

const updatePendaftaran = async (data, id) =>
{
  try
  {
    const pendaftaran = await pendaftaranRepository.updatePendaftaran(data, id);
    return pendaftaran;
  }
  catch (err)
  {
    return err;
  }
}

const deletePendaftaran = async (id) =>
{
  try
  {
    const pendaftaran = await pendaftaranRepository.deletePendaftaran(id);
    return pendaftaran;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllPendaftaran,
  getPendaftaranByID,
  createPendaftaran,
  updatePendaftaran,
  deletePendaftaran
}
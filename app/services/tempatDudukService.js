// const acaraSeminar = require('../models/acaraSeminar');
const tempatdudukRepository = require('../repositories/tempatdudukRepository');

const getAllTempatDuduk = async () => 
{
  try 
  {
    const tempatduduks = await tempatdudukRepository.getAllTempatDuduk();
    return tempatduduks;
  }
  catch (err)
  {
    return err;
  }
}

const getTempatDudukByID = async (id) =>
{
  try
  {
    const tempatduduk = await tempatdudukRepository.getTempatDudukByID(id);
    return tempatduduk;
  }
  catch (err)
  {
    return err;
  }
}

const createTempatDuduk = async (data) =>
{
  try
  {
    const tempatduduk = await tempatdudukRepository.createTempatDuduk(data);
    return tempatduduk;
  }
  catch (err)
  {
    return err; 
  }
}

const updateTempatDuduk = async (data, id) =>
{
  try
  {
    const tempatduduk = await tempatdudukRepository.updateTempatDuduk(data, id);
    return tempatduduk;
  }
  catch (err)
  {
    return err;
  }
}

const deleteTempatDuduk = async (id) =>
{
  try
  {
    const tempatduduk = await tempatdudukRepository.deleteTempatDuduk(id);
    return tempatduduk;
  }
  catch (err)
  {
    return err;
  }
}

module.exports = 
{
  getAllTempatDuduk,
  getTempatDudukByID,
  createTempatDuduk,
  updateTempatDuduk,
  deleteTempatDuduk
}
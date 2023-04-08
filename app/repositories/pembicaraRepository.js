const {pembicara} = require('../models');


const getAllPembicara = () => 
{
  return pembicara.findAll();
}

const getPembicaraByID = (id) => 
{
  return pembicara.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create pembicara
const createPembicara = (data) =>
{
  return pembicara.create(data);
}

const updatePembicara = (data, id) => 
{
  return pembicara.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deletePembicara = (id) =>
{
  return pembicara.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllPembicara,
  getPembicaraByID,
  updatePembicara,
  createPembicara,
  deletePembicara
}
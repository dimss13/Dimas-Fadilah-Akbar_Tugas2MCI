const {acaraseminar} = require('../models');


const getAllAcaraSeminar = () => 
{
  // console.log(acaraseminar.findAll());
  return acaraseminar.findAll();
}

const getAcaraSeminarById = (id) => 
{
  return acaraseminar.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create acaraseminar
const createAcaraSeminar = (data) =>
{
  return acaraseminar.create(data);
}

const updateAcaraSeminar = (data, id) => 
{
  return acaraseminar.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deleteAcaraSeminar = (id) =>
{
  return acaraseminar.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllAcaraSeminar,
  getAcaraSeminarById,
  updateAcaraSeminar,
  createAcaraSeminar,
  deleteAcaraSeminar
}
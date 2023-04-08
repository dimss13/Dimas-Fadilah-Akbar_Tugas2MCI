const {penyelenggara} = require('../models');


const getAllPenyelenggara = () => 
{
  return penyelenggara.findAll();
}

const getPenyelenggaraByID = (id) => 
{
  return penyelenggara.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create penyelenggara
const createPenyelenggara = (data) =>
{
  return penyelenggara.create(data);
}

const updatePenyelenggara = (data, id) => 
{
  return penyelenggara.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deletePenyelenggara = (id) =>
{
  return penyelenggara.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllPenyelenggara,
  getPenyelenggaraByID,
  updatePenyelenggara,
  createPenyelenggara,
  deletePenyelenggara
}
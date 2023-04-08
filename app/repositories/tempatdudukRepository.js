const {tempatduduk} = require('../models');


const getAllTempatDuduk = () => 
{
  return tempatduduk.findAll();
}

const getTempatDudukByID = (id) => 
{
  return tempatduduk.findOne(
    {
      where: {
        id: id
      }
    }
  )
}

// Create tempatduduk
const createTempatDuduk = (data) =>
{
  return tempatduduk.create(data);
}

const updateTempatDuduk = (data, id) => 
{
  return tempatduduk.update(data, {
    where: 
    {
      id: id
    }
  })
}

const deleteTempatDuduk = (id) =>
{
  return tempatduduk.destroy(
    {
      where: {
        id: id
      }
    }
  )
}

module.exports = 
{
  getAllTempatDuduk,
  getTempatDudukByID,
  updateTempatDuduk,
  createTempatDuduk,
  deleteTempatDuduk
}
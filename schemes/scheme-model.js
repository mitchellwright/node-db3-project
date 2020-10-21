const db = require("../knexfile");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

function add(user) {}

function update(changes, id) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

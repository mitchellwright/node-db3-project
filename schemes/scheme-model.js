const db = require("../data/config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

function add(scheme) {
  db("schemes")
    .insert(scheme)
    .then((ids) => {
      return findById(ids[0]);
    });
}

async function update(changes, id) {
  await db("schemes").where("id", id).update(changes);

  return findById(id);
}

async function remove(id) {
  const scheme = await findById(id);
  await db("schemes").where({ id }).del();
  return scheme;
}

function findSteps(id) {
  return db("steps").where({ scheme_id: id });
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps,
};

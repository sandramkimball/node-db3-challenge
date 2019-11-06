const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){
    return db.select('*').from('users');
}

function findById(id){
    return db('schemes')
    .where({id})
    .first();
}

function findSteps(id){
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.scheme_id', 'steps.instructions as Steps')
    .where('steps.scheme_id', id);
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return getById(ids[0]);
    });
}

function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes);
}

function remove(id){
    return db('schemes')
    .where('id', id)
    .del();
}
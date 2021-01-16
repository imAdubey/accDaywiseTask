const { body } = require('express-validator');
const users = require('../../core/v1/users/users');

const {findUsers, saveUsers, updateUsers, deleteUsers} = new users.UsersClass();

const find = async()=>{
    const result = await findUsers();
    return result;
}

const save = async(body)=>{
    const result = await saveUsers(body);
    return result;
}

const update = async(id, body)=>{
    const result = await updateUsers(id, body);
    return result;
}

const deleteu = async(id)=>{
    const result = await deleteUsers(id);
    return result;
}

module.exports = {find, save, update, deleteu};

const find = require('../../../core/v1/user/find');
const save = require('../../../core/v1/user/save');
const update = require('../../../core/v1/user/update');
const deleted = require('../../../core/v1/user/delete');

const {findAll} = new find.FindClass()
const {saveUser} = new save.SaveClass()
const {updateUser} = new update.UpdateClass()
const {deleteUser} = new deleted.DeleteClass()

const findEmp = async()=>{
    const result = await findAll();
    return result;
}

const saveEmp = async(body)=>{
    const result = await saveUser(body);
    return result;
}

const updateEmp = async(params, body)=>{
    const result = await updateUser(params, body);
    return result
}

const deleteEmp = async(id)=>{
    const result = await deleteUser(id);
    return result
}

module.exports =  {findEmp, saveEmp, updateEmp, deleteEmp};
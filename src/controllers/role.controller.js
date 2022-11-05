const db = require('../config/db')
const getList = (req, res) => {
    db.query("SELECT * FROM role",(err,result)=>{
        if(err){
            res.json({
                error : true,
                message: err
            })
        }else{
            res.json({
                list : result,
            })
        }
        
    })
}

const create = (req, res) => {
    const body = req.body
    const message = {};
    if(body.name == '' || body.name == null){
        message['name'] = "Please fill in role name"
    }
    if(body.code == '' || body.code == null){
        message['code'] = "Please fill in role code"
    }

    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "INSERT INTO role (name, code) VALUES (?,?)"
    db.query(insertSQL,[body.name,body.code],(err,result)=>{
        if(!err){
            res.json({
                message: "insert success"
            })
            
        }else{
            res.json({
                error: true,
                err: err
            })
            
        }
    })
}

const update = (req, res) => {
    const body = req.body
    const message = {};
    if(body.role_id == '' || body.role_id == null){
        message['role_id'] = "Please fill in role_id"
    }
    if(body.name == '' || body.name == null){
        message['name'] = "Please fill in role name"
    }
    if(body.status == '' || body.status == null){
        message['status'] = "Please fill in status"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "UPDATE role SET name=?, code=?, status=? WHERE role_id=?"
    db.query(insertSQL,[body.name,body.code,body.status, body.role_id],(err,result)=>{
        if(!err){
            res.json({
                message: "update success"
            })
            
        }else{
            res.json({
                error: true,
                err: err
            })
            
        }
    })
}

const remove = (req, res) => {
    const body = req.body
    const message = {};
    if(body.role_id === '' || body.role_id == null){
        message['role_id'] = "Please fill in role_id"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "DELETE FROM role WHERE role_id=?"
    db.query(insertSQL,[body.role_id ],(err,result)=>{
        if(!err){
            res.json({
                message: "remove success"
            })
            
        }else{
            res.json({
                error: true,
                err: err
            })
            
        }
    })
}

const assignPermissionRole = (req, res) => {
    const body = req.body
    const message = {};
    if(body.permission_id == '' || body.permission_id == null){
        message['permission_id'] = "Please fill in permission_id"
    }       
    if(body.role_id == '' || body.role_id == null){
        message['role_id'] = "Please fill in role_id"
    }
    
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }
    const insertSQL = "Insert into role_permission (role_id,permission_id) VALUE (?,?)"    
    db.query(insertSQL,[body.role_id, body.permission_id],(err,result)=>{
        if(!err){
            res.json({
                message: "insert success"
            })
            
        }else{
            res.json({
                error: true,
                err: err
            })
            
        }
    })
}
module.exports = {
    getList,
    create,
    update,
    remove,
    assignPermissionRole
}
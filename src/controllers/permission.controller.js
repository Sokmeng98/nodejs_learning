const db = require('../config/db')
const getList = (req, res) => {
    db.query("SELECT * FROM permission",(err,result)=>{
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
        message['name'] = "Please fill in permission name"
    }
    if(body.code == '' || body.code == null){
        message['code'] = "Please fill in permission code"
    }

    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "INSERT INTO permission (name, code, description) VALUES (?,?,?)"
    db.query(insertSQL,[body.name,body.code,body.description],(err,result)=>{
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
    if(body.permission_id == '' || body.permission_id == null){
        message['permission_id'] = "Please fill in permission_id"
    }
    if(body.name == '' || body.name == null){
        message['name'] = "Please fill in role name"
    }
    if(body.description == '' || body.description == null){
        message['description'] = "Please fill in permission description"
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

    const insertSQL = "UPDATE role SET name=?, code=?, description=?, status=? WHERE permission_id=?"
    db.query(insertSQL,[body.name,body.code,body.description,body.status, body.permission_id],(err,result)=>{
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
    if(body.permission_id === '' || body.permission_id == null){
        message['permission_id'] = "Please fill in permission_id"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "DELETE FROM permission WHERE permission_id=?"
    db.query(insertSQL,[body.permission_id ],(err,result)=>{
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

module.exports = {
    getList,
    create,
    update,
    remove
}
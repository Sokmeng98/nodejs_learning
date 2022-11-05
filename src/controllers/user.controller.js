const db = require('../config/db')
const getList = (req, res) => {
    db.query("SELECT * FROM user",(err,result)=>{
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
    if(body.username == '' || body.username == null){
        message['username'] = "Please fill in username"
    }
    if(body.password == '' || body.password == null){
        message['password'] = "Please fill in password"
    }
    if(body.tel == '' || body.tel == null){
        message['tel'] = "Please fill in tel"
    }

    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "INSERT INTO user (username, password,tel,email) VALUES (?,?,?,?)"
    db.query(insertSQL,[body.username,body.password,body.tel,body.email],(err,result)=>{
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
    if(body.user_id == '' || body.user_id == null){
        message['user_id'] = "Please fill in user_id"
    }       
    if(body.username == '' || body.username == null){
        message['username'] = "Please fill in username"
    }
    if(body.password == '' || body.password == null){
        message['password'] = "Please fill in password"
    }
    if(body.tel == '' || body.tel == null){
        message['tel'] = "Please fill in tel"
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

    const insertSQL = "UPDATE user SET username=?, password=?, tel=?, email=?, status=? WHERE user_id=?"    
    db.query(insertSQL,[body.username,body.password,body.tel,body.email,body.status, body.user_id],(err,result)=>{
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

const assignRole = (req, res) => {
    const body = req.body
    const message = {};
    if(body.user_id == '' || body.user_id == null){
        message['user_id'] = "Please fill in user_id"
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
    const insertSQL = "Insert into user_role (user_id,role_id) VALUE (?,?)"    
    db.query(insertSQL,[body.user_id, body.role_id],(err,result)=>{
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
    assignRole
}
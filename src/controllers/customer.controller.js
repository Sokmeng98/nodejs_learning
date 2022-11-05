const db = require('../config/db')
const getList = (req, res) => {
    db.query("SELECT * FROM customer",(err,result)=>{
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
    if(body.firstname == '' || body.firstname == null){
        message['firstname'] = "Please fill in firstname"
    }
    if(body.lastname == '' || body.lastname == null){
        message['lastname'] = "Please fill in lastname"
    }
    if(body.gender === '' || body.gender == null){
        message['gender'] = "Please fill in gender"
    }
    if(body.email == '' || body.email == null){
        message['email'] = "Please fill in email"
    }
    if(body.tel == '' || body.tel == null){
        message['tel'] = "Please fill in tel"
    }
    if(body.status === '' || body.status == null){
        message['status'] = "Please fill in status"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "INSERT INTO customer (firstname, lastname, gender, email, tel, status) VALUES (?,?,?,?,?,?)"
    db.query(insertSQL,[body.firstname,body.lastname,body.gender,body.email,body.tel,body.status],(err,result)=>{
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
    if(body.customer_id == '' || body.customer_id == null){
        message['customer_id'] = "Please fill in customer_id"
    }
    if(body.firstname == '' || body.firstname == null){
        message['firstname'] = "Please fill in firstname"
    }
    if(body.lastname == '' || body.lastname == null){
        message['lastname'] = "Please fill in lastname"
    }
    if(body.gender === '' || body.gender == null){
        message['gender'] = "Please fill in gender"
    }
    if(body.email == '' || body.email == null){
        message['email'] = "Please fill in email"
    }
    if(body.tel == '' || body.tel == null){
        message['tel'] = "Please fill in tel"
    }
    if(body.status === '' || body.status == null){
        message['status'] = "Please fill in status"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "UPDATE customer SET firstname=?, lastname=?, gender=?, email=?, tel=?, status=? WHERE customer_id=?"
    db.query(insertSQL,[body.firstname,body.lastname,body.gender,body.email,body.tel,body.status, body.customer_id],(err,result)=>{
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
    if(body.customer_id === '' || body.customer_id == null){
        message['customer_id'] = "Please fill in customer_id"
    }
    if(Object.keys(message).length > 0){
        res.json({
            erorr: true,
            message: message
        })
        return false
    }

    const insertSQL = "DELETE FROM customer WHERE customer_id=?"
    db.query(insertSQL,[body.customer_id ],(err,result)=>{
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
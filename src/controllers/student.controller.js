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
    res.send('create')
}

module.exports = {
    getList,
    create
}
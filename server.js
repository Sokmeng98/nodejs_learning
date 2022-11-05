const express = require('express')
const app = express()
let cors = require("cors");
app.use(express.json())
app.get('/',(req,res)=>{
     res.send('hello world')
})

app.use(cors());

require('./src/routes/student.route')(app)
require('./src/routes/customer.route')(app)
require('./src/routes/role.route')(app)
require('./src/routes/user.route')(app)
require('./src/routes/permission.route')(app)

app.listen(8080, ()=>{
    console.log('server run on localhost:8080')
})
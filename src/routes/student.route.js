const studentController = require('../controllers/student.controller')
const student = (app) =>{
    app.get('/api/student/list',studentController.getList)

    app.post('/api/student/create',studentController.create)
    
}

module.exports = student
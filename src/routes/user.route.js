const userController = require('../controllers/user.controller')
const user = (app) =>{
    app.get('/api/user',userController.getList)
    app.post('/api/user',userController.create)
    app.put('/api/user',userController.update)
    app.post('/api/user/assignrole',userController.assignRole)
}

module.exports = user
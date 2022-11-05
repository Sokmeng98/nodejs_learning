const permissionController = require('../controllers/permission.controller')
const permission = (app) =>{
    app.get('/api/permission/list',permissionController.getList)
    app.post('/api/permission/create',permissionController.create)
    app.put('/api/permission/update',permissionController.update)
    app.delete('/api/permission/remove',permissionController.remove)
    
}

module.exports = permission
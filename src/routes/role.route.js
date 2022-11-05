const roleController = require('../controllers/role.controller')
const role = (app) =>{
    app.get('/api/role/list',roleController.getList)
    app.post('/api/role/create',roleController.create)
    app.put('/api/role/update',roleController.update)
    app.delete('/api/role/remove',roleController.remove)
    app.post('/api/role/assignpermissionrole',roleController.assignPermissionRole)
    
}

module.exports = role
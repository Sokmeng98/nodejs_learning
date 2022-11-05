const customerController = require('../controllers/customer.controller')
const customer = (app) =>{
    app.get('/api/customer/list',customerController.getList)
    app.post('/api/customer/create',customerController.create)
    app.post('/api/customer/update',customerController.update)
    app.post('/api/customer/remove',customerController.remove)
    
}

module.exports = customer
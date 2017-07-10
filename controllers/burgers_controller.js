var burgerApp = require('../models/burger.js')

module.exports = function(app) {
    app.get('/', function(req, res) {     
        burgerApp.getAllBurger(res);
    });            
    app.post('/api/add', function(req, res) {  
        var burger_name = req.body.burger_name; 
        burgerApp.addBurger(burger_name);       
    });
    app.post('/api/update', function(req, res) {
        var burger_name = req.body.burger_name; 
        burgerApp.updateBurger(burger_name);       
    });
};

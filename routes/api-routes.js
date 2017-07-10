var db = require('../models');
var processor = require('./processor.js')
var burger = db.Burger;
var sequelize = db.sequelize;

module.exports = function(app) {
    app.get('/', function(req, res) {            
        burger.findAll({
            order: sequelize.col('burger_name')
        }).then(function(result) {
            var processed = processor(result);
            res.render('index', {burg: processed[0], eaten_burg: processed[1]});
        });     
    }); 
    app.post('/api/add', function(req, res) {  
        var burger_name = req.body.burger_name; 
        var customer_name = req.body.customer_name;

        burger.create({
            burger_name: burger_name,
            devoured: false,
            customer: customer_name
        }).then(function() {
            res.end();
        });
    });
    app.post('/api/update', function(req, res) {
        var burger_id = req.body.burger_id;  
        var eater = req.body.eater;

        burger.update({
            devoured: true,
            eater: eater
        }, {
            where: {
                id: burger_id
            }
        }).then(function() {
            res.end();
        });          
    });
}


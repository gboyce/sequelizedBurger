var orm = require('../config/orm.js');

var burger = 
{
    getAllBurger: function(res) {
        var queryString = 'SELECT * FROM burgers';
        orm.selectAll(queryString, function(burger_list) {
            var unDevoured = [];
            var Devoured = [];
            for (var i = 0; i < burger_list.length; i++) {
                if (burger_list[i].devoured === 0) {
                    unDevoured.push({burger_name: burger_list[i].burger_name});
                }
                else if (burger_list[i].devoured === 1) {
                    Devoured.push({burger_name: burger_list[i].burger_name});
                }
            }
            res.render('index', {burg: unDevoured, eaten_burg: Devoured});
        }); 
    },
    addBurger: function(burger_name) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
        orm.insertOne(queryString, burger_name);
    },
    updateBurger: function(burger_name) {
        var queryString = 'UPDATE burgers SET devoured=true WHERE burger_name=?';
        orm.updateOne(queryString, burger_name);
    }
};

module.exports = burger;

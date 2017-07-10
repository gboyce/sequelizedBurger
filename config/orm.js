var connection = require('../config/connection.js');

var orm = 
{
    selectAll: function(queryString, callback) {
        connection.query(queryString, function(err, result) {
            callback(result);
        });
    },
    insertOne: function(queryString, data) {
        connection.query(queryString, data, function(err, result) {
            if (err) {throw err;}  
        });
    },
    updateOne: function(queryString, data) {
        connection.query(queryString, data, function(err, result) {
            if (err) {throw err;}
        });
    }
};

module.exports = orm;
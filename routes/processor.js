module.exports = function(data) {
    var unDevoured = [];
    var Devoured = [];
    for (var i = 0; i < data.length; i++) {
        var dataValues = data[i].dataValues;  

        if (data[i].dataValues.devoured === false) {   

            var not_devoured = {
                burger_name: dataValues.burger_name,
                id: dataValues.id,
                eater_id: dataValues.id + '_eater'
            }   

            unDevoured.push(not_devoured);
        }
        else if (data[i].dataValues.devoured === true) {
            var devoured = {
                burger_name: dataValues.burger_name,
                customer: dataValues.customer,
                eater: dataValues.eater
            }
            Devoured.push(devoured);
        }
    }
    var burger_array = [unDevoured, Devoured];
    return burger_array;
}
const db = require('../models');

module.exports = function(app) {
    app.get('/', function (req, res) {
        db.Product.findAll({}).then(function (products) {
            res.json(products);
        }).catch(function (error) {
            res.json({errror:error});
        })
    })
}
const db = require('../models');

module.exports = function(app) {
    app.get('/api/products', function (req, res) {
        db.Product.findAll({}).then(function (products) {
            res.json(products);
        }).catch(function (error) {
            res.json({errror:error});
        })
    })

    app.put('/api/products/:product_name', function (req, res) {
        db.Product.update(req.body, {
            where: {
                product_name: req.params.product_name
            }
        }).then(function(data) {
            res.end()
        })
    })
}
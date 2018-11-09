const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/api-routes.js')(app);

db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log(`App is listening on ${PORT}`)
    })
})

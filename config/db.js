var mysql = require('mysql'); //npm install mysql
var db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'day30',
    port    :'3306'
});

module.exports = db
const db = require('../config/db')

let selectQuery = `SELECT * FROM pet`
db.query(selectQuery, function(error, results, fields) {
    if (error) throw error;
    console.log('List pet: ', results);
});
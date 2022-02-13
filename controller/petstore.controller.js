const db = require('../config/db')

// Pet Table
function uploadImage(req, res) {
    let insertQuery = `UPDATE pet SET photoUrls = ? WHERE id = ?;`
    let data = [req.body.photoUrls, req.params.id]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function newPet(req, res) {
    let insertQuery = `INSERT INTO pet (category, name, photoUrls, tags, status) VALUES (?, ?, ?, ?, ?);`
    let data = [req.body.category.id, req.body.name, req.body.photoUrls, req.body.tags.id, req.body.status]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });
    
    let insertCategoryQuery = `INSERT INTO category (name) VALUES (?);`
    let category = [req.body.category.name]
    db.query(insertCategoryQuery, category, function (error, results, fields) {
        if (error) throw error;
    });
    
    let insertTagsQuery = `INSERT INTO tag (name) VALUES (?);`
    let tags = [req.body.tags.name]
    db.query(insertTagsQuery, tags, function (error, results, fields) {
        if (error) throw error;
    });

    res.send ({message: 'Data has been inserted', data : data})
}

function updatedPet(req, res) {
    let update = `UPDATE pet SET`
    let condition = `updatedAt = CURRENT_TIMESTAMP() WHERE id = (?);`
    let data = [req.body.id]
    if (req.body.status !== "") {data.unshift(req.body.status); condition = `status = (?), ${condition}`}
    if (req.body.tags.id !== "") {data.unshift(req.body.tags.id); condition = `tags = (?), ${condition}`}
    if (req.body.photoUrls !== "") {data.unshift(req.body.photoUrls); condition = `photoUrls = (?), ${condition}`}
    if (req.body.name !== "") {data.unshift(req.body.name); condition = `name = (?), ${condition}`}
    if (req.body.category.id !== "") {data.unshift(req.body.category.id); condition = `category = (?), ${condition}`}
    let updateQuery = `${update} ${condition}`
    db.query(updateQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send ({message: 'Data has been updated', data : data})
}

function listPetStatus(req, res) {
    let selectQuery = `SELECT * FROM pet WHERE status = ?;`
    let data = [req.body.status]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function listPetId(req, res) {
    let selectQuery = `SELECT * FROM pet WHERE id = ?;`
    let data = [req.params.id]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function updatedPetForm(req, res) {
    let insertQuery = `UPDATE pet SET name = ?, status = ? WHERE id = ?;`
    let data = [req.body.name, req.body.status, req.params.id]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function deletedPet(req, res) {
    let deletedQuery = `DELETE FROM pet WHERE id = ?;`
    let data = [req.params.id]
    db.query(deletedQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send ({message: 'Data has been deleted'})
}

// Store Table
function orderPet(req, res) {
    let insertQuery = `INSERT INTO store (petId, quantity, shipDate, status) VALUES (?, ?, ?, ?);`
    let data = [req.body.petId, req.body.quantity, req.body.shipDate, req.body.status]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send ({message: 'Data has been inserted', data : data})
}

function listStore(req, res) {
    let selectQuery = `SELECT * FROM store WHERE id = ?;`
    let data = [req.params.id]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function deletedOrder(req, res) {
    let deletedQuery = `DELETE FROM store WHERE id = ?;`
    let data = [req.params.id]
    db.query(deletedQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send ({message: 'Data has been deleted'})
}

function listInventory(req, res) {
    let selectQuery = `SELECT COUNT(status) AS "Total", status, SUM(quantity) AS "Total Quantity" FROM store GROUP BY status;`
    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}


// User Table
function createUserArray(req, res) {
    let insertQuery = `INSERT INTO user (username, firstName, lastName, email, password, phone) VALUES (?, ?, ?, ?, ?, ?);`
    let data = [req.body.username, req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.phone]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    data = [data];
    
    res.send ({message: 'Data has been inserted', data : data})
}

function createUserList(req, res) {
    let insertQuery = `INSERT INTO user (username, firstName, lastName, email, password, phone) VALUES (?, ?, ?, ?, ?, ?);`
    let data = [req.body.username, req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.phone]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    data = [data];
    
    res.send ({message: 'Data has been inserted', data : data})
}

function listUser(req, res) {
    let selectQuery = `SELECT * FROM user WHERE username = ?;`
    let data = [req.params.username]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'Data is found', data : results})
    });
}

function updatedUser(req, res) {
    let update = `UPDATE user SET`
    let condition = `updatedAt = CURRENT_TIMESTAMP() WHERE username = (?);`
    let data = [req.params.username]
    if (req.body.firstName !== "") {data.unshift(req.body.firstName); condition = `firstName = (?), ${condition}`}
    if (req.body.lastName !== "") {data.unshift(req.body.lastName); condition = `lastName = (?), ${condition}`}
    if (req.body.email !== "") {data.unshift(req.body.email); condition = `email = (?), ${condition}`}
    if (req.body.password !== "") {data.unshift(req.body.password); condition = `password = (?), ${condition}`}
    if (req.body.phone !== "") {data.unshift(req.body.phone); condition = `phone = (?), ${condition}`}
    if (req.body.userStatus !== "") {data.unshift(req.body.userStatus); condition = `userStatus = (?), ${condition}`}
    let updateQuery = `${update} ${condition}`
    db.query(updateQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send ({message: 'Data has been updated', data : data})
}

function deletedUser(req, res) {
    let deletedQuery = `DELETE FROM user WHERE username = ?;`
    let data = [req.params.username]
    db.query(deletedQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send ({message: 'Data has been deleted'})
}

function loginUser(req, res) {
    let selectQuery = `SELECT * FROM user WHERE username = ? AND password = ?;`
    let data = [req.body.username, req.body.password]
    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        
        if (data.length < 1){
            res.send ({message: 'Your username or password may be incorrect.', data : results})
        }
        res.send ({message: 'You are successfully logged in.', data : results})
    });
}

function logoutUser(req, res) {
    let selectQuery = `SELECT * FROM store;`
    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        
        res.send ({message: 'You are successfully logged out.', data : results})
    });
}

function createUser(req, res) {
    let insertQuery = `INSERT INTO user (username, firstName, lastName, email, password, phone) VALUES (?, ?, ?, ?, ?, ?);`
    let data = [req.body.username, req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.phone]
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send ({message: 'Data has been inserted', data : data})
}

module.exports = {
    uploadImage, //pet
    newPet,
    updatedPet,
    listPetStatus,
    listPetId,
    updatedPetForm,
    deletedPet,
    orderPet, //store
    listStore,
    deletedOrder,
    listInventory,
    createUserArray,  //user
    createUserList,
    listUser,
    updatedUser,
    deletedUser,
    loginUser,
    logoutUser,
    createUser
}
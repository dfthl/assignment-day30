const db = require('../config/db')

let createPetQuery = `
CREATE TABLE IF NOT EXISTS pet(
    id INT NOT NULL AUTO_INCREMENT,
    category INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    photoUrls VARCHAR(255) NULL DEFAULT NULL,
    tags INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE = 'utf8mb4_general_ci'
;`

db.query(createPetQuery, function(error, results, fields) {
    if (error) throw error;
    console.log("Table 'Pet' has been created");
});

let createStoreQuery = `
CREATE TABLE IF NOT EXISTS store(
    id INT NOT NULL AUTO_INCREMENT,
    petId INT NOT NULL,
    quantity INT NULL DEFAULT 0,
    shipDate DATETIME NULL DEFAULT NULL,
    status VARCHAR(50) NULL DEFAULT NULL,
    complete BOOLEAN DEFAULT 0,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id, petId)
)
COLLATE = 'utf8mb4_general_ci'
;`

db.query(createStoreQuery, function(error, results, fields) {
    if (error) throw error;
    console.log("Table 'Store' has been created");
});

let createUserQuery = `
CREATE TABLE IF NOT EXISTS user(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    userStatus BOOLEAN DEFAULT 0,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE = 'utf8mb4_general_ci'
;`

db.query(createUserQuery, function(error, results, fields) {
    if (error) throw error;
    console.log("Table 'User' has been created");
});

let createCategoryQuery = `
CREATE TABLE IF NOT EXISTS category(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)
COLLATE = 'utf8mb4_general_ci'
;`

db.query(createCategoryQuery, function(error, results, fields) {
    if (error) throw error;
    console.log("Table 'Category' has been created");
});

let createTagQuery = `
CREATE TABLE IF NOT EXISTS tag(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)
COLLATE = 'utf8mb4_general_ci'
;`

db.query(createTagQuery, function(error, results, fields) {
    if (error) throw error;
    console.log("Table 'Tag' has been created");
});
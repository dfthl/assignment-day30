const express = require('express')
const petstoreRoute = require('../controller/petstore.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json
})

// pet
router.post('/pet/:id/uploadImage', petstoreRoute.uploadImage)
router.post('/pet', petstoreRoute.newPet)
router.put('/pet', petstoreRoute.updatedPet)
router.get('/pet/findByStatus', petstoreRoute.listPetStatus)
router.get('/pet/:id', petstoreRoute.listPetId)
router.post('/pet/:id', petstoreRoute.updatedPetForm)
router.delete('/pet/:id', petstoreRoute.deletedPet)

// store
router.post('/store/order', petstoreRoute.orderPet)
router.get('/store/order/:id', petstoreRoute.listStore)
router.delete('/store/order/:id', petstoreRoute.deletedOrder)
router.get('/store/inventory', petstoreRoute.listInventory)
   
// user
router.post('/user/createWithArray', petstoreRoute.createUserArray)
router.post('/user/createWithList', petstoreRoute.createUserList)
router.get('/user/:username', petstoreRoute.listUser)
router.put('/user/:username', petstoreRoute.updatedUser)
router.delete('/user/:username', petstoreRoute.deletedUser)
router.get('/user/login', petstoreRoute.loginUser)
router.get('/user/logout', petstoreRoute.logoutUser)
router.post('/user', petstoreRoute.createUser)

module.exports = router
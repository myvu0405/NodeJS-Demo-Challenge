const express=require('express');
const router=express.Router();

const controller = require('../controllers/handlers')

router.get('/feed', controller.getHomePage);
router.post('/feed', controller.addOneFeed);

//show one feed
router.get('/feed/:id', controller.getOneFeed);

//edit/delete feed
router.all('/feed/edit/:id', controller.editOneFeed);
router.get('/feed/delete/:id', controller.deleteOneFeed);



module.exports=router;

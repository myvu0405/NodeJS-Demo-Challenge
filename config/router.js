const express=require('express');
const router=express.Router();

const controller = require('../controllers/handlers')

router.get('/', controller.getHomePage);
router.all('/add-article', controller.postNewArticle);

//show one article
router.get('/article/:id', controller.getArticle);

//edit/delete article
router.all('/edit-article/:id', controller.editArticle);
router.get('/delete-article/:id', controller.deleteArticle);



module.exports=router;

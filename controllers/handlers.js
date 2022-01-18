const {Article}= require('../models/articles');

const getHomePage = (req,res) => {
    
    Article.find()
        .then(result=> {
            res.render('index', {pageTitle: 'Home page',result});

        })
        .catch(err => console.log(err))
}

const postNewArticle = (req,res) =>{
    if(req.method=='GET') res.render('addArticle',{pageTitle: 'New Article',err:false});
    else if(req.method=='POST') {
        //add new post`
        const article=new Article(req.body);
        //console.log('submit', req.body);
        article.save()
            .then(result => {
                res.redirect('/');
            })
            .catch(err => res.render('addArticle',{pageTitle:'New Article',err: err.errors}))
    }
}

const getArticle = (req,res) =>{

    //find article
    Article.findById({_id: req.params.id})
        .then(result => {

            res.render('showArticle',{pageTitle:'Article detail', result});
        })
        .catch(err => console.log(err))
    
}

const editArticle=(req,res) => {

    if(req.method=='GET') {
        Article.findById({_id: req.params.id})
        .then(result => {

            res.render('editArticle',{pageTitle:'Edit Article',result, err: false});
        })
        .catch(err => console.log(err))
    }
    else if (req.method=='POST') {
        Article.findByIdAndUpdate({_id: req.params.id})
            .then(result => {
                result.title=req.body.title;
                result.article=req.body.article;
                result.save()
                    .then(resultUpdate => res.redirect('/')) 
                    .catch(err => res.render('editArticle',{pageTitle:'Edit Article',result, err: err.errors}))
            })
            .catch(err => console.log(err))
    }
}

//delete article
const deleteArticle=(req,res) =>{

    Article.findByIdAndDelete({_id: req.params.id})
        .then( () => {
            res.redirect('/');
        })
        .catch(err=> console.log(err))
}


module.exports = {
    getHomePage,
    postNewArticle,
    getArticle,
    editArticle,
    deleteArticle
}
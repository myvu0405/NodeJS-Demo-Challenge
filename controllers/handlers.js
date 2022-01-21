const {Feed}= require('../models/feed');

const getHomePage = (req,res) => {
    
    Feed.find().sort({updatedAt:-1})
        .then(result=> {
            
            res.render('feed', {pageTitle: 'Welcome to FaceBook',result,feed:false,err: false});

        })
        .catch(err => console.log(err))
}

//add one new feed
const addOneFeed = (req,res) =>{

    const newFeed=new Feed(req.body);
    
    newFeed.save()
        .then(result => {
            res.redirect('/feed');
        })
        .catch(err => {
            
            Feed.find().sort({updatedAt:-1})
                .then( result => res.render('feed',{pageTitle:'Welcome to Facebook',result,feed:newFeed,err: err.errors}))
                .catch(error => console.log(error))
        })
 
}

const getOneFeed = (req,res) =>{

    //find feed
    Feed.findById({_id: req.params.id})
        .then(result => {

            res.render('feedDetail',{pageTitle:'Feed detail', result});
        })
        .catch(err => console.log(err))
    
}

//edit one feed

const editOneFeed=(req,res) => {

    if(req.method=='GET') {
        Feed.findById({_id: req.params.id})
        .then(result => {

            res.render('editFeed',{pageTitle:'Edit feed',result, err: false});
        })
        .catch(err => console.log(err))
    }
    else if (req.method=='POST') {
        Feed.findByIdAndUpdate(req.params.id)
            .then((result) => {
                result.name=req.body.name;
                result.message=req.body.message;
                
                result.save()
                    .then(() => res.redirect(`/feed/${result._id}`)) 
                    .catch(err => res.render('editFeed',{pageTitle:'Edit feed',result, err: err.errors}))
                
            })
            .catch(err => console.log(err))
    }
}

//delete one feed
const deleteOneFeed=(req,res) =>{

    Feed.findByIdAndDelete(req.params.id)
        .then( () => {
            res.redirect('/feed');
        })
        .catch(err=> console.log(err))
}


module.exports = {
    getHomePage,
    addOneFeed,
    getOneFeed,
    editOneFeed,
    deleteOneFeed
}
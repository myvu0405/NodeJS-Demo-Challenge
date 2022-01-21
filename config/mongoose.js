const mongoose=require('mongoose');

const db='mongodb+srv://myvu01:haydoiday1@nodetuts.zqauy.mongodb.net/facebook_mvc_challenge?retryWrites=true&w=majority'; //db url
//mongoose.set('useFindAndModify', false);

mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology:true})
    .then((res => console.log('Connect to db successfully!')))
    .catch(err => console.log(err))
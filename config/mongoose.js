const mongoose=require('mongoose');

const db='mongodb+srv://<username>:<password>@nodetuts.zqauy.mongodb.net/nodejs_demo_challenge?retryWrites=true&w=majority'; //db url
//mongoose.set('useFindAndModify', false);

mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology:true})
    .then((res => console.log('Connect to db successfully!')))
    .catch(err => console.log(err))
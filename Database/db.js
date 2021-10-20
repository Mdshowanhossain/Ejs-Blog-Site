const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://FirstData:FirstData1@cluster0.f2pep.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-qzci16-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')
    .then((res) => {
        console.log('Your Database Connection Succesful')
    })
    .catch((err) => {
        console.log(err)
    })
const mongoose = require('mongoose');

const  mongoURI='mongodb+srv://idatabase:inotebookpass@cluster0.ipdmuxx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
        console.log("Connected to Mongo Successfully");
    
}

module.exports = connectToMongo;
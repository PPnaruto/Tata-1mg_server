const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connect =async ()=>{
    await mongoose.connect('mongodb+srv://Tata_1mg:Tata_1mg_react@cluster0.c5uj7wt.mongodb.net/Tata-1mg');
}

module.exports = connect;
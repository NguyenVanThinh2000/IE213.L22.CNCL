const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://ThinhNguyen:Thinh2701@cluster0.rfhgh.mongodb.net/Sea-Furniture?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect successfully!');
    } catch (err){
        console.log('Connect failure!');
    }
};
module.exports = {connect};
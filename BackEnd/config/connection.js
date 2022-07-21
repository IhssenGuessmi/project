const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=> {
    try {
        await mongoose.connect('mongodb+srv://spectra:ihsan007@cluster0.qmq4pph.mongodb.net/ProjectSpectra?retryWrites=true&w=majority')
        console.log('DB connected .... :)')
    } catch (error) {
        console.log('DB not connected !!!! :(')
    }
}
module.exports=connectDB
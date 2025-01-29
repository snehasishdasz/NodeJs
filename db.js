const mongoose = require('mongoose');

//*Define the MongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/hotels'

//* Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//* Get the default connection
//* Mongoose maintains a default connection object representing the mongoDB connection.
const db = mongoose.connection;

//* Define eventlistener for database connections
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:', err);
});

db.on('disconnected',()=>{
    console.log(' MongoDB disconnected');
});

//*Export the database connection
module.exports = db;
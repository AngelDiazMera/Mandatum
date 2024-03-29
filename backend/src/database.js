// you need to execute mongod on a terminal

const mongoose = require('mongoose');

const uri = process.env.MONGO_ATLAS_URI;

// mongoose connects to our db
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

mongoose.set('useFindAndModify', false);

// store the connection
const connection = mongoose.connection;

// once open, arrow function is excecuted
connection.once('open', () => {
    console.log('DB is connected');
})

module.exports = connection;

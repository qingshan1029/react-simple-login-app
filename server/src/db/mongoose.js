const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


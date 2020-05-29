const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/local', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

module.exports = mongoose
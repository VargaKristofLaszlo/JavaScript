const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PH1ARV', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;

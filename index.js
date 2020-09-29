const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('static'));

//Route loading
require('./Routes/Doctorlist')(app);
require('./Routes/Login')(app);
require('./Routes/Patientlist')(app);
require('./Routes/Others')(app);

const server = app.listen(3000, function () {
    console.log('On: 3000');
});


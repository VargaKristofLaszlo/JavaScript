const express = require('express');
const app = express();

app.use(express.static('static'));

require('./Routes/Doctorlist')(app);
require('./Routes/Login')(app);
require('./Routes/Others')(app);
require('./Routes/Patientlist')(app);

const server = app.listen(3000, function () {
    console.log('On: 3000');
});

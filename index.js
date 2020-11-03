const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(session ({
    secret: 'ˇ^˘ˇ°`°đđ]đĐ]sgshshásklt5331355'

}));


//Route loading
require('./Routes/Doctorlist')(app);
require('./Routes/Patientlist')(app);
require('./Routes/Others')(app);


app.use((err,req,res,next) => {
    res.end('Error');
    console.log(err);
});


const server = app.listen(3000, function () {
    console.log('On: 3000');
});



//Create the datebase with some data
/*
const PatientModel = require('./models/Patient');
const DoctorModel = require('./models/Doctor');


let doctor = new DoctorModel();
doctor.name = 'DoctorName_1';
doctor.phone_number = 12345;
doctor.e_mail = 'doctorname_1@mail.com';
doctor.med_spec = 'spec1';
doctor.password = 'password1';
doctor.permission = true;

let doctor1 = new DoctorModel();
doctor1.name = 'DoctorName_2';
doctor1.phone_number = 123456;
doctor1.e_mail = 'doctorname_2@mail.com';
doctor1.med_spec = 'spec2';
doctor1.password = 'password2';
doctor1.permission = false;

let patient = new PatientModel();
patient.name = 'PatientName_1';
patient.illnes = 'flu';
patient.date_of_birth = new Date('1960-01-12T03:24:00');
patient._name_doctor = doctor;

let patient2 = new PatientModel();
patient2.name = 'PatientName_2';
patient2.illnes = 'covid';
patient2.date_of_birth = new Date('1960-01-12T03:24:00');
patient2._name_doctor = doctor1;


patient.save();
patient2.save();
doctor.save();
doctor1.save();*/
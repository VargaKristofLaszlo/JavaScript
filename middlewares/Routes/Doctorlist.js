const authMW = require('../Auth/authMW');
const renderMW = require('../Rendering/renderMW');
const delDoctorMW = require('../Doctor/delDoctorMW');
const getDoctorMW = require('../Doctor/getDoctorMW');
const getDoctorsMW = require('../Doctor/getDoctorsMW');
const saveDoctorMW = require('../Doctor/saveDoctorMW');
const checkPermissionMW = require('../Permisson/checkPermissionMW');

module.exports = function (app){
    let objectRepository = {};

   //Megjeleníti az összes orvost
   app.get('/Doctors',
       authMW(objectRepository),
       getDoctorsMW(objectRepository),
       renderMW(objectRepository, 'Doctors')
       );

   //Létrehoz egy új orvost
   app.get('Doctors/new',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       saveDoctorMW(objectRepository),
       renderMW(objectRepository, 'newDoctor')
       );

   //Módosítja az orvos adatait
   app.get('/Doctors/edit/:DoctorID',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       getDoctorsMW(objectRepository),
       saveDoctorMW(objectRepository),
       renderMW(objectRepository, 'newDoctor')
       );

   //Törli az orvost
   app.get('/Doctors/del/:DoctorID',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       getDoctorMW(objectRepository),
       delDoctorMW(objectRepository)
       );
}
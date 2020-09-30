const authMW = require('../middlewares/Auth/authMW');
const renderMW = require('../middlewares/Rendering/renderMW');
const delDoctorMW = require('../middlewares/Doctor/delDoctorMW');
const getDoctorMW = require('../middlewares/Doctor/getDoctorMW');
const getDoctorsMW = require('../middlewares/Doctor/getDoctorsMW');
const saveDoctorMW = require('../middlewares/Doctor/saveDoctorMW');
const checkPermissionMW = require('../middlewares/Permisson/checkPermissionMW');

module.exports = function (app){
    let objectRepository = {};

   //Megjeleníti az összes orvost
   app.get('/Doctors',
       authMW(objectRepository),
       getDoctorsMW(objectRepository),
       renderMW(objectRepository, 'Doctor')
       );

   //Létrehoz egy új orvost
   app.use('/Doctors/new',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       saveDoctorMW(objectRepository),
       renderMW(objectRepository, 'Doctor_Registering')
       );

   //Módosítja az orvos adatait
   app.use('/Doctors/edit/:DoctorID',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       getDoctorMW(objectRepository),
       saveDoctorMW(objectRepository),
       renderMW(objectRepository, 'DoctorEdit')
       );

   //Törli az orvost
   app.get('/Doctors/del/:DoctorID',
       authMW(objectRepository),
       checkPermissionMW(objectRepository),
       getDoctorMW(objectRepository),
       delDoctorMW(objectRepository)
       );
}
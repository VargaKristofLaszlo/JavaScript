const authMW = require('../middlewares/Auth/authMW');
const renderMW = require('../middlewares/Rendering/renderMW');
const delPatientMW = require('../middlewares/Patient/delPatientMW');
const getPatientMW = require('../middlewares/Patient/getPatientMW');
const getPatientsMW = require('../middlewares/Patient/getPatientsMW');
const savePatientMW = require('../middlewares/Patient/savePatientMW');
const getDoctorMW = require('../middlewares/Doctor/getDoctorMW');

const DoctorModel = require('../models/Doctor');
const PatientModel = require('../models/Patient');

module.exports = function (app){
    let objectRepository = {
        DoctorModel: DoctorModel,
        PatientModel: PatientModel
    };




    //Létrehoz egy új beteget
    app.use('/Patient/new/:DoctorID',
        authMW(objectRepository),
        savePatientMW(objectRepository),
        renderMW(objectRepository, 'Patient_Registering')
    );

    //Módosítja a beteg adatait
    app.use('/Patient/edit/:PatientID',
        authMW(objectRepository),
        getPatientMW(objectRepository),
        savePatientMW(objectRepository),
        renderMW(objectRepository, 'PatientEdit')
    );




    //Törli a beteget
    app.get('/Patient/del/:PatientID',
        authMW(objectRepository),
        getDoctorMW(objectRepository),
        getPatientMW(objectRepository),
        delPatientMW(objectRepository)
    );



    //Megjeleníti az  összes beteget
    app.get('/Patients',
       authMW(objectRepository),
       getPatientsMW(objectRepository),
       renderMW(objectRepository, 'Patients')
    );




}
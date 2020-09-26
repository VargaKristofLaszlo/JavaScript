const authMW = require('../Auth/authMW');
const renderMW = require('../Rendering/renderMW');
const delPatientMW = require('../Patient/delPatientMW');
const getPatientMW = require('../Patient/getPatientMW');
const getPatientsMW = require('../Patient/getPatientsMW');
const savePatientMW = require('../Patient/savePatientMW');
const getDoctorMW = require('../Doctor/getDoctorMW');

module.exports = function (app){
    let objectRepository = {};

    //Megjeleníti egy orvos összes betegét
    app.get('/Patient/:DoctorID/list',
        authMW(objectRepository),
        getPatientsMW(objectRepository),
        renderMW(objectRepository, 'Patients')
    );

    //Létrehoz egy új beteget
    app.get('/Patient/new/:DoctorID',
        authMW(objectRepository),
        savePatientMW(objectRepository),
        renderMW(objectRepository, 'newPatient')
    );

    //Módosítja a beteg adatait
    app.get('/Patient/edit/:DoctorID/PatientID',
        authMW(objectRepository),
        savePatientMW(objectRepository),
        renderMW(objectRepository, 'newPatient')
    );

    //Törli a beteget
    app.get('/Patient/del/:DoctorID/:PatientID',
        authMW(objectRepository),
        getDoctorMW(objectRepository),
        getPatientMW(objectRepository),
        delPatientMW(objectRepository)
    );
}
const authMW = require('../middlewares/Auth/authMW');
const renderMW = require('../middlewares/Rendering/renderMW');
const delPatientMW = require('../middlewares/Patient/delPatientMW');
const getPatientMW = require('../middlewares/Patient/getPatientMW');
const getPatientsMW = require('../middlewares/Patient/getPatientsMW');
const getAllPatientsMW = require('../middlewares/Patient/getAllPatientsMW');
const savePatientMW = require('../middlewares/Patient/savePatientMW');
const getDoctorMW = require('../middlewares/Doctor/getDoctorMW');

module.exports = function (app){
    let objectRepository = {};

    //Megjeleníti az összes beteget
    app.get('/Patient',
        authMW(objectRepository),
        getAllPatientsMW(objectRepository),
        renderMW(objectRepository, 'Patients')
    );


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
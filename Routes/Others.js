const renderMW = require('../middlewares/Rendering/renderMW');
const getPatientMW = require('../middlewares/Patient/getPatientMW');
const checkPasswordMW = require('../middlewares/Auth/checkPasswordMW');
const authMW = require('../middlewares/Auth/authMW');
const LogoutMW = require('../middlewares/Auth/LogoutMW');


const DoctorModel = require('../models/Doctor');
const PatientModel = require('../models/Patient');

let objectRepository = {
    DoctorModel: DoctorModel,
    PatientModel: PatientModel
};
module.exports = function (app) {




    //A bejelentkezett orvos betegeit jeleníti meg.
    app.use('/Home',
        getPatientMW(objectRepository),
        renderMW(objectRepository, 'Home')
        );


    //A bejelenetkezett felhasználó kiléptetését oldja meg
    app.get('/Logout',
        LogoutMW);

    //A bejelentkező felületet jeleníti meg.
    app.use('/',
        checkPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
    );

};
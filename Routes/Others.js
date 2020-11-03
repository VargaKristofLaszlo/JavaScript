const renderMW = require('../middlewares/Rendering/renderMW');
const checkPasswordMW = require('../middlewares/Auth/checkPasswordMW');
const authMW = require('../middlewares/Auth/authMW');
const LogoutMW = require('../middlewares/Auth/LogoutMW');
const checkPermissionMW = require('../middlewares/Permisson/checkPermissionMW');
const getPatientsForHomeMw = require('../middlewares/Patient/getPatientsForHomeMW');


const DoctorModel = require('../models/Doctor');
const PatientModel = require('../models/Patient');

let objectRepository = {
    DoctorModel: DoctorModel,
    PatientModel: PatientModel
};
module.exports = function (app) {




    //A bejelentkezett orvos betegeit jeleníti meg.
    app.use('/Home',
        authMW(objectRepository),
        getPatientsForHomeMw(objectRepository),
        renderMW(objectRepository, 'Home')
        );


    //A bejelenetkezett felhasználó kiléptetését oldja meg
    app.get('/Logout',
        LogoutMW(objectRepository)
        );

    //A bejelentkező felületet jeleníti meg.
    app.use('/',
        checkPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
    );

};
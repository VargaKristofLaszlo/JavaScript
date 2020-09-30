const renderMW = require('../middlewares/Rendering/renderMW');
const getPatientMW = require('../middlewares/Patient/getPatientMW');
const checkPasswordMW = require('../middlewares/Auth/checkPasswordMW');
let objectRepository = {};
module.exports = function (app) {

    //A bejelentkezett orvos betegeit jeleníti meg.
    app.use('/Home',
        getPatientMW(objectRepository),
        renderMW(objectRepository, 'Home')
        );

    //A bejelentkező felületet jeleníti meg.
    app.get('/',
        checkPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
    );
};
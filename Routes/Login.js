const authMW = require('../middlewares/Auth/authMW');
const handleWrongPasswordMW = require('../middlewares/Auth/handleWrongPasswordMW');
const renderMW = require('../middlewares/Rendering/renderMW');



module.exports = function (app){
    let objectRepository = {};

    //A  hibásan megadott jelszó kezelését oldja meg.
    app.get('/?Error = WrongPassword',
        handleWrongPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
        );


}
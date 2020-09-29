const authMW = require('../middlewares/Auth/authMW');
const checkPasswordMW = require('../middlewares/Auth/checkPasswordMW');
const handleWrongPasswordMW = require('../middlewares/Auth/handleWrongPasswordMW');
const renderMW = require('../middlewares/Rendering/renderMW');


module.exports = function (app){
    let objectRepository = {};

    //A  hibásan megadott jelszó kezelését oldja meg.
    app.get('/?Error = WrongPassword',
        handleWrongPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
        );

    //A megadott jelszót ellőnörzi.
    app.get('/Login',
        checkPasswordMW(objectRepository)
        );

}
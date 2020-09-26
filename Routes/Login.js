const authMW = require('../middlewares/Auth/authMW');
const checkPasswordMW = require('../middlewares/Auth/checkPasswordMW');
const handleWrongPasswordMW = require('../middlewares/Auth/handleWrongPasswordMW');
const renderMW = require('../middlewares/Rendering/renderMW');


module.exports = function (app){
    let objectRepository = {};


    app.get('/?Error = WrongPassword',
        handleWrongPasswordMW(objectRepository),
        renderMW(objectRepository, 'index')
        );

    app.get('/Login',
        checkPasswordMW(objectRepository)
        );

}
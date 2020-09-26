const authMW = require('../Auth/authMW');
const checkPasswordMW = require('../Auth/checkPasswordMW');
const handleWrongPasswordMW = require('../Auth/handleWrongPasswordMW');
const renderMW = require('../Rendering/renderMW');


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
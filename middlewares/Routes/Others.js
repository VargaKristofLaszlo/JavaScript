const renderMW = require('../Rendering/renderMW');

let objectRepository = {};
module.exports = function (app) {
    app.get('/',
        renderMW(objectRepository, 'index')
    );

    app.get('/Home',
        renderMW(objectRepository, 'Home')
        );
};
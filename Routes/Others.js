const renderMW = require('../middlewares/Rendering/renderMW');

let objectRepository = {};
module.exports = function (app) {

    //A bejelentkezett orvos betegeit jeleníti meg.
    app.get('/Home',
        renderMW(objectRepository, 'Home')
        );

    //A bejelentkező felületet jeleníti meg.
    app.get('/',
        renderMW(objectRepository, 'index')
    );
};
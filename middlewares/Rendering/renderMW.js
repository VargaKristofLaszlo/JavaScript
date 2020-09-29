/**
 * Megjeleníti a paraméterként átadott html-t.
 * */

module.exports = function (objectRepository, viewName){
    return function (req, res) {
        res.render(viewName);
    };
}
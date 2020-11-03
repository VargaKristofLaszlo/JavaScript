/**
 *  A belépett felhasználót jelentkezteti ki.
 * */

module.exports = function (objectRepository){
    return function (req,res,next){
        req.session.destroy(  err => {
                res.redirect("/");
        });
    };

};
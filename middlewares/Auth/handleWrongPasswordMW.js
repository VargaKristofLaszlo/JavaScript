/**
 *  Ha hibás volt a jelszó akkor a felhasználót értesíti.
 * */

module.exports = function (objectRepository){
    return function (res,req,next){
        return next();
    }
}
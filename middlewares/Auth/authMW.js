/**
 *  Ellenőrzi, hogy bevagyunk-e jelentkezve.
 *  Ha igen akkor továbblép , ha nem akkor visszalép /-re
 * */
    module.exports = function (objectRepository) {


        return function (req,res,next){
           if(typeof  req.session.belepve === 'undefined' ||
                req.session.belepve !== true){
               return res.redirect('/');
           }
           next();
        };
    };
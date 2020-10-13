/**
 * Kitörli a patient objektumot:  res.locals.patient.
 * Ezek után visszatér a /Patients-ra
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){
    return function (req,res,next){
        if(typeof res.locals.patient ==='undefined')  {
            return  next();
        }
        res.locals.patient.remove( (err) => {
            if(err){
                return next(err);
            }
            return res.redirect('/Patients');

        });
    };
};
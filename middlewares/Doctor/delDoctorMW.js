/**
 * Kitörli a doctor objektumot:  res.locals.doctor.
 * Ezek után visszatér a /Doctors-ra
 * */

const requireOption = require('../Auth/requireOption');

module.exports = function (objectRepository){
    return function (req,res,next){
        if(typeof res.locals.doctorData ==='undefined')  {
            return  next();
        }
        res.locals.doctorData.remove( (err) => {
            if(err){
            return next(err);
        }
            return res.redirect('/Doctors');

        });
    };
};
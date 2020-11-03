/**
 *  A Post paramétereit(rest.locals.patient) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 *  Ha végzett átirányít a /Patients-re
 * */
const requireOption = require('../Auth/requireOption');
module.exports = function (objectRepository){
    const PatientModel = requireOption(objectRepository, 'PatientModel');
    return function (req,res,next){

        if( (typeof req.body.Name ==='undefined')           ||
            (typeof  req.body.Illness ==='undefined')  ||
            (typeof  req.body.Birth === 'undefined')
        ){
            return  next();
        }
        res.locals.patient = new PatientModel();

        res.locals.patient.name = req.body.Name;
        res.locals.patient.illness = req.body.Illness;
        res.locals.patient.date_of_birth = req.body.Birth;

        res.locals.patient._name_doctor = req.session.felhasznalo._id;


        res.locals.patient.save((err)=>{
            if(err) return  next(err);
        })


        return res.redirect('/Patients');
    }
}
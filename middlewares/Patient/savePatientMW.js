/**
 *  A Post paramétereit(rest.locals.patient) felhasználva eldönti, hogy új objektumot kell-e mentenie vagy
 *  már egy meglévőt kell-e felülírnia
 *  Ha nem létezik írja felül, ha létezik akkor pedig update-elje
 * */
const requireOption = require('../Auth/requireOption');
module.exports = function (objectRepository){
    const PatientModel = requireOption(objectRepository, 'PatientModel');
    return function (req,res,next){

        if( (typeof req.body.Name ==='undefined')           ||
            (typeof  req.body.Illness ==='undefined')  ||
            (typeof  req.body.Birth === 'undefined')       ||
            (typeof  req.body.Doctor_name === 'undefined')
        ){
            return  next();
        }
        res.locals.patient = new PatientModel();

        res.locals.patient.name = req.body.Name;
        res.locals.patient.illness = req.body.Illness;
        res.locals.patient.date_of_birth = req.body.Birth;


        //Ide kell még majd az orvosos rész, de ahhoz tudnom kell ki van belépve.

        //res.locals._name_doctor = res.locals.doctor._id;


        /*res.locals.patient.save((err)=>{
            if(err) return  next(err);
        })*/


        return res.redirect('/Patients');
    }
}
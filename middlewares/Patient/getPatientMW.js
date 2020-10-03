/**
 * Visszadja a megindexelt orvoshoz tartozó megindexelt patient objektumot
 * Ha ez az objektum nem létezik akkor visszatér a /Patients-re
 * Ha létezik ez az objektum elhelyezi a res.locals.patient-be
 * */

module.exports = function (objectRepository){
    return function (req,res,next){
        res.locals.patient =
            {
                Name: 'Test_Name',
                Illness: 'Covid',
                Date_of_birth:  '1999.11.11',
                Name_of_the_doctor: 'Doctor_Name',
                _id:'id1'
            };


        return next();
    }
}
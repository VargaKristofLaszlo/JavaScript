/**
 * Visszadja az összes  egy orvoshoz tartozó patient objektumot és elmenti a res.locals.patients-be
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        res.locals.patients = [
            {
                Name: 'Test_Name',
                Illness: 'Covid',
                Date_of_birth:  '1999.11.11',
                Name_of_the_doctor: 'Doctor_Name',
                _id:'id1'
            },
            {
                Name: 'Test_Name2',
                Illness: 'broken hand',
                Date_of_birth:  '1999.11.11',
                Name_of_the_doctor: 'Doctor_Name',
                _id:'id2'
            }
        ];
        return next();
    }
}
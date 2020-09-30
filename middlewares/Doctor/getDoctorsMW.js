/**
 * Visszadja az összes  doktor objektumot és elmenti a res.locals.doctorData-ba
 * */

module.exports = function (objectRepository){
    return function (req,res,next){

        res.locals.doctorData = [
            {
                _DoctorID:    'id1',
                Name:   'Teszt_Name',
                Phone_number: '01 23-234 5678',
                E_mail: 'tszt@mail.hu',
                Medical_scpecialty: 'field',
                Permission: 'admin',
                Password: '123456'
            },
            {
                _DoctorID:    'id2',
                Name:   'Teszt_Name_2',
                Phone_number: '01 23-234 5678',
                E_mail: 'tszt2@mail.hu',
                Medical_scpecialty: 'field',
                Permission: 'user',
                Password: '123456'
            }
        ];
        return next();
    }
}
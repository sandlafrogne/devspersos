/**
 * Created by TNVL6480 on 29/10/2014.
 */

var request = require('request')
var http = require('http');

exports.login = function (req, res, next) {

    console.log(req.body.email)
    console.log(req.body.password)
    console.log('login')

    var user = {
        email: req.body.email,
        password: req.body.password
    };
    var userString = JSON.stringify(user);
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': userString.length
    };
    var options = {
        host: 'localhost',
        port: 3100,
        path: '/login',
        method: 'POST',
        headers: headers
    };
    var reqServer = http.request(options, function (resServer) {
        resServer.setEncoding('utf-8');
        var responseString = '';
        resServer.on('data', function (data) {
            responseString += data;
        });
        resServer.on('end', function () {
            var resultObject = JSON.parse(responseString);
            res.status(200).json(resultObject)
        });
    });
    reqServer.on('error', function (e) {
        // TODO: handle error.
    });
    reqServer.write(userString);
    reqServer.end();
}


exports.logout = function (req, res, next) {
    res.status(200).json({status: 'OK'})
}


exports.poolNumbers = function (req, res, next) {
    //réservations de N° via api Florence : post ../voiceServices/{serviceId}/numbers
    // Si on n'a pas le serviceId (récupérable par un get ../voiceServices), il faut faire avant une création de service vocal : post ../voiceServices

    res.status(200).json({status: 'OK'})
}

exports.allvNumber = function (req, res, next) {
    //obtenir la liste des n° préalablement réservés (API Florence)
    //a la place de {status:ok}, il faut renvoyer la liste des vnumbers réserves
    //res.status(200).json(allvNumbers)
    res.status(200).json({status: 'OK'})
}

exports.addvNumber = function (req, res, next) {
    //TO DO associer un n° réel à un n° virtuel via api florence

    //enregistrer infos client (nom, date naissance, code PIN..) dans mongoDB entreprise
    // et le vnumber et le contextId donnés par l'API de Florence

    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    var userString = JSON.stringify(user);
    var headers = {
        'Content-Type': 'application/json',
        'Content-Length': userString.length
    };
    var options = {
        host: 'localhost',
        port: 3100,
        path: '/addvNumber',
        method: 'POST',
        headers: headers
    };
    var reqServer = http.request(options, function (resServer) {
        resServer.setEncoding('utf-8');
        var responseString = '';
        resServer.on('data', function (data) {
            responseString += data;
        });
        resServer.on('end', function () {
            var resultObject = JSON.parse(responseString);
            res.status(200).json(resultObject)
        });
    });
    reqServer.on('error', function (e) {
        // TODO: handle error.
    });
    reqServer.write(userString);
    reqServer.end();

  //  res.status(200).json({status: 'OK'})
}

exports.deletevNumber = function (req, res, next) {
    //pour le poc : delete de tous les vnumbers (raz)
    //dans ma lecture de l'api, un reset n'existe pas.
    // le seul delete que j'ai trouvé est le delete du service vocal (delete ../voiceServices/{serviceId}.
    // Dans ce cas, on perd le serviceId. Il faut le recréer lors de la première réservation de vnumbers
    res.status(200).json({status: 'OK'})

}

//pour Clément
exports.verifyPin=function(req,res,next){
    //récupérer msisdn + code pin et vérifier que le couple existe en base
    // verifyPin de authentEntreprise

    //puis retourner  le contextId et le vnumber associé.(api Florence)

    res.status(200).json({status:'OK'})

}
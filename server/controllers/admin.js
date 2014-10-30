/**
 * Created by TNVL6480 on 29/10/2014.
 */

var request = require('request')

exports.login=function(req,res,next){

    console.log(req.body.email)
    console.log(req.body.password)
    console.log('login')


  /* $http({method: 'GET', url: 'phrases.json'})
        .success(function (data) {
           console.log(data)
            *//*$scope.posts = data;
            $scope.initialisation();*//*
        });*/


    //appel du serveur
/*request.post({
    url:"http://localhost:5000/login"},
    function(error,response, body){
        if(error){
            next(error);
            return
        }
        if(response.statusCode !=200){
            res.set('Content-Type',response.headers['content-type'])
            res.status(response.statusCode).send(body)
            return
        }
      var bodyParse=JSON.parse(body)
      res.json(bodyParse)


})*/

//request("url").pipe(res)
    res.status(200).json({status:'OK'})
}


exports.logout=function(req,res,next){
    res.status(200).json({status:'OK'})
}


exports.poolNumbers=function(req,res,next){
    //réservations de N° via api Florence : post ../voiceServices/{serviceId}/numbers
    // Si on n'a pas le serviceId (récupérable par un get ../voiceServices), il faut faire avant une création de service vocal : post ../voiceServices

    res.status(200).json({status:'OK'})
}

exports.allvNumber=function(req,res,next){
    //obtenir la liste des n° préalablement réservés (API Florence)
    //a la place de {status:ok}, il faut renvoyer la liste des vnumbers réserves
    //res.status(200).json(allvNumbers)
    res.status(200).json({status:'OK'})
}

exports.addvNumber=function(req,res,next){
    //associer un n° réel à un n° virtuel via api florence
    //enregistrer infos client (nom, date naissance, code PIN..) dans mongoDB entreprise
    res.status(200).json({status:'OK'})
}

exports.deletevNumber=function(req,res,next){
    //pour le poc : delete de tous les vnumbers (raz)
    //dans ma lecture de l'api, un reset n'existe pas.
    // le seul delete que j'ai trouvé est le delete du service vocal (delete ../voiceServices/{serviceId}.
    // Dans ce cas, on perd le serviceId. Il faut le recréer lors de la première réservation de vnumbers
    res.status(200).json({status:'OK'})

}

var applicationController = require('../controllers/admin')

module.exports = function(app){
    //login
    app.post('/login',applicationController.login)
    app.get('/logout',applicationController.logout)

    //réservation de plage de vnumber

    app.post('/poolNumbers',applicationController.poolNumbers)
    app.get('/allvNumber', applicationController.allvNumber)


    //association d'un n° réel avec un vnumber
    app.post('/addvNumber',applicationController.addvNumber)
    app.delete('/vNumber', applicationController.deletevNumber)


}

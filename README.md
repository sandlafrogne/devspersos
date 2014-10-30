# vNumber
===========

Projet vierge pour nodeJS

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Source de ce projet


##Git Projet avec Source tree


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

* cd yourDirectory
* npm install
* node index.js

Your app should now be running on [localhost:80](http://localhost:80/).


## Best practices

* Ajouter un controller : 
	ne pas oublier dans index.html de rajouter le nouveau fichier dans les scripts importés
* Rafraichisseemnt des données : **$scope.$apply()**
* Multilangue : géré par le module translate. 
	* Modifier le fichier app.js pour ajouter les nouvelles clés
	* Utilisation : dans le code html insérer : **{{'nameKey' | translate}}**
* Interceptor : dans app.js, permet de rajouter un nom de serveur devant l'url relative afin de faire des appels API en relatif dans services et de compléter le nom du serveur distant à un seul endroit. 
* appel html d'une page : localhost:5000/#/keyword

* Relancer automatiquement le serveur en cas de modification de code : 
	* npm install -g nodemon
	* lancement du serveur  : ***nodemon -e js,html, css index.js***

## Documentation 
* [Angular](https://docs.angularjs.org/guide/)
* [Bootstrap](http://getbootstrap.com/javascript/) 
* [Présentations graphiques](http://blog.angularjs.org/)
* [plunker, environnement de test](http://plnkr.co/)
* [JsFiddle, environnement de test](http://jsfiddle.net/)



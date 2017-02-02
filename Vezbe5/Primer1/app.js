var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
	
	var helloState = {
		name: 'hello',
		url: '/hello',
		template: '<h3>hello world!</h3>'
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		template: '<h3>Its the UI-Router hello world app!</h3>'
	}

	var mojeStanje = {
		name: 'mojeStanje',
		url: '/NESTONESTO',
		templateUrl: 'mojestanje.html'
	}

	$stateProvider.state(helloState);
	$stateProvider.state(aboutState);
	$stateProvider.state(mojeStanje);
});
var app = angular.module('MyApp', ['ui.router', 'ui.bootstrap', 'firebase']);

app.config(function ($logProvider) {
	$logProvider.debugEnabled(true);

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAqhKgP3xmeL9CxvYSeUlNOPK3T1SddPvY",
		authDomain: "angularkurs.firebaseapp.com",
		databaseURL: "https://angularkurs.firebaseio.com",
		storageBucket: "angularkurs.appspot.com",
		messagingSenderId: "219706523111"
	};
	firebase.initializeApp(config);
});
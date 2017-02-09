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

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/students');
	
	$stateProvider
		// HOME STATES AND NESTED VIEWS ========================================
		.state('students', {
			url: '/students',
			templateUrl: 'features/students/student.template.html'
		})
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		.state('teachers', {
			url: '/teachers',
			templateUrl: 'features/teachers/teacher.template.html'
		});
}]);
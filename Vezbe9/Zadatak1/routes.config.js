app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');
	
	$stateProvider
		.state('students', {
			url: '/students',
			templateUrl: 'features/students/student.template.html',
			resolve: {
				currentAuth: ['Auth', function(Auth) {
					return Auth.loggedIn;
				}]
			}
		})
		.state('teachers', {
			url: '/teachers',
			templateUrl: 'features/teachers/teacher.template.html',
			resolve: {
				currentAuth: ['Auth', function(Auth) {
					return Auth.loggedIn;
				}]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'features/login/login.template.html'
		});
}]);
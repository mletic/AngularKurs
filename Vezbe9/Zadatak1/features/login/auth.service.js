app.factory('Auth', function($rootScope, $state, $firebaseAuth)
{
	var self = this;

	self.authObj = $firebaseAuth(firebase.auth());
	self.authObj.$onAuthStateChanged(function(user) {
		if (user) {
			console.log(user);
			$rootScope.user = user;
			self.loggedIn = true;
			$state.go('students');
		} else {
			$rootScope.user = null;
			self.loggedIn = false;
			$state.go('login');
		}
	});

	$rootScope.logout = function () {
		self.authObj.$signOut();
	};

	return self.authObj;

});
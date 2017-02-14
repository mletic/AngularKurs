app.controller('LoginController', function($scope, $firebaseAuth)
{
	var self = this;
	console.log('Login controller');
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAqhKgP3xmeL9CxvYSeUlNOPK3T1SddPvY",
		authDomain: "angularkurs.firebaseapp.com",
		databaseURL: "https://angularkurs.firebaseio.com",
		storageBucket: "angularkurs.appspot.com",
		messagingSenderId: "219706523111"
	};
	firebase.initializeApp(config);

	self.authObj = $firebaseAuth(firebase.auth());
	console.log(self.authObj);
	

	self.login = function () {
		var provider = new firebase.auth.GithubAuthProvider();
		console.log('login');

		self.authObj.$signInWithPopup(provider).then(function(result) {
			// This gives you a GitHub Access Token. You can use it to access the GitHub API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			console.log(result);
			self.profileImg = user.photoURL;
		});
	};

	self.logout = function () {
		console.log('logout');
	};
});
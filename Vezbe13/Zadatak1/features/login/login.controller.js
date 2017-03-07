app.controller('LoginController', function($rootScope, $scope, Auth)
{
	var self = this;

	self.login = function () {
		var provider = new firebase.auth.GithubAuthProvider();

		Auth.$signInWithPopup(provider).then(function(result) {
			// This gives you a GitHub Access Token. You can use it to access the GitHub API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			console.log(result);
			self.profileImg = user.photoURL;
		});
	};

});
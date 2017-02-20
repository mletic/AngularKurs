app.controller('MainController', function($log, $state, $mdSidenav)
{
	var self = this;

	self.toggleLefSidebar = function () {
		$mdSidenav('left').toggle();
	}

	self.changeState = function (stateName) {
		$state.go(stateName);
		self.toggleLefSidebar();
	}

});
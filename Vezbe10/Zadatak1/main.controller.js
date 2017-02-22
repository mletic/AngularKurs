app.controller('MainController', function($log, $state, $mdSidenav, $uibModal, $translate, Auth)
{
	var self = this;

	self.toggleLefSidebar = function () {
		$mdSidenav('left').toggle();
	}

	self.changeState = function (stateName) {
		$state.go(stateName);
		self.toggleLefSidebar();
	}

	self.openUserSettings = function () {
		self.modalDialog = $uibModal.open({
			animation: true,
			controller: 'MainController as mainCtrl',
			templateUrl: 'modal.html',
		});
	};

	self.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

	self.logout = function () {
		//self.modalDialog.close();
		Auth.$signOut();
	};
});
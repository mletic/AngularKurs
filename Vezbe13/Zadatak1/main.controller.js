app.controller('MainController', function($log, $mdSidenav, $uibModal)
{
	var self = this;

	self.sidebarItems = [
		{
			stateName: 'students',
			name: 'STUDENTS'
		},
		{
			stateName: 'teachers',
			name: 'TEACHERS'
		},
		{
			stateName: 'schools',
			name: 'SCHOOLS'
		}
	];

	self.toggleLefSidebar = function () {
		$mdSidenav('left').toggle();
	}

	self.openUserSettings = function () {
		self.modalDialog = $uibModal.open({
			animation: true,
			controller: 'ModalController as modalCtrl',
			templateUrl: 'modal.html',
		});
	};

	
});
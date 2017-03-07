app.controller('ModalController', function($scope, $translate, $uibModalInstance, Auth)
{
	var self = this;

	self.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

	self.logout = function () {
		$uibModalInstance.close();
		Auth.$signOut();
	};
});
app.controller('MainController', function($scope)
{
	var self = this;

	self.message = '';
	self.message = 'Cekam 2000ms na update';

	setTimeout(function() {
		$scope.$apply (function () {
			self.message = 'Timeout je pozvan';
		});
	}, 2000);

	self.update = function () {

	};
});
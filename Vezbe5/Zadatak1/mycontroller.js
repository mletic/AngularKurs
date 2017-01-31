app.controller('StudentController', ['$scope', '$log', function($scope, $log)
{
	var self = this;

	self.student = {
		ime: '',
		prezime: '',
		fakultet: '',
		index: '',
		prosek: '',
		godinaUpisa: ''
	};
	self.studenti = [];
	self.studentZaIspis = {};

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		self.studentZaIspis = angular.copy(self.student);
		self.studenti.push(self.studentZaIspis);
	};

	self.obrisiStudenta = function (index) {
		$log.debug('StudentController.obrisiStudenta()');

		self.studenti.splice(index, 1);
	};

	//DOMACI
	self.editStudenta = function (index) {
		$log.debug('StudentController.editStudenta()');

		self.student = self.studenti[index];
	};


}]);
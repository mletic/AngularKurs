app.controller('StudentController', ['$scope', '$log', 'studentDataService', function($scope, $log, studentDataService)
{
	var self = this;

	self.student = null;
	self.students = studentDataService.getStudents();
	self.studentZaIspis = {};

	self.dateOptions = {
		formatYear: 'yy',
		maxDate: new Date(2020, 5, 22),
		minDate: new Date(),
		startingDay: 1
	};

	self.open1 = function() {
		self.popup1.opened = true;
	};

	self.open2 = function() {
		self.popup2.opened = true;
	};

	self.popup1 = {
		opened: false
	};

	self.popup2 = {
		opened: false
	};

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		studentDataService.addStudent(self.student);
		self.students = studentDataService.getStudents();
	};

	self.obrisiStudenta = function (index) {
		$log.debug('StudentController.obrisiStudenta()');

		studentDataService.removeStudent(index);
		self.students = studentDataService.getStudents();
	};

	self.updateStudent = function () {
		$log.debug('StudentController.editStudent()');
		
		studentDataService.updateStudent(self.student, self.index);
		self.students = studentDataService.getStudents();
	};

	self.addStudentDataToEditForm = function (index) {
		$log.debug('StudentController.addStudentDataToEditForm()');

		self.student = angular.copy(self.students[index]);
		self.index = index;
	};

	self.closeDetailView = function () {
		$log.debug('StudentController.closeDetailView()');

		self.student = null;
	}


}]);
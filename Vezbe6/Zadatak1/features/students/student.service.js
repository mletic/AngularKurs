app.factory('studentDataService', ['$log', function($log)
{

	var students = _getStudentsDatabase();

	return {
		getStudents: getStudents,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent
	}

	function addStudent (student) {
		$log.debug('studentDataService.addStudent()');

		students.push(student);
	}

	function getStudents () {
		$log.debug('studentDataService.getStudents()');

		return students;
	}

	function removeStudent (index) {
		$log.debug('studentDataService.removeStudent()');

		students.splice(index, 1);
	}

	function updateStudent (student, index) {
		$log.debug('studentDataService.removeStudent()');

		students[index] = student;
	}

	function _getStudentsDatabase () {
		var students = [
			{
				firstname: 'Marko',
				lastname: 'Letic',
				faculty: 'FTN',
				index: 222,
				averageGrade: 11,
				year: 2019
			},
			{
				firstname: 'Dusan',
				lastname: 'Pavlovic',
				faculty: 'FTN',
				index: 222,
				averageGrade: 11,
				year: 2009
			},
			{
				firstname: 'Milos',
				lastname: 'Petrovic',
				faculty: 'FTN',
				index: 222,
				averageGrade: 11,
				year: 2007
			},
			{
				firstname: 'Dejan',
				lastname: 'Miletic',
				faculty: 'FTN',
				index: 222,
				averageGrade: 11,
				year: 1999
			},
			{
				firstname: 'Jovana',
				lastname: 'Pavlovic',
				faculty: 'FTN',
				index: 222,
				averageGrade: 11,
				year: 2011
			}
		];

		return students;
	}

}]);
app.factory('studentDataService', ['$log', '$http', '$q', function($log, $http, $q)
{

	var rootUrl = 'https://angularkurs.firebaseio.com/';

	return {
		getStudents: getStudents,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent
	}

	function addStudent (student) {
		$log.debug('studentDataService.addStudent()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: "POST",
			data: student
		})
		.then(addStudentComplete)
		.catch(addStudentFailed);

		function addStudentComplete(response) {
			$log.debug('studentDataService.addStudentComplete()');

			return response.data;
		}

		function addStudentFailed(error) {
			$log.error('studentDataService.addStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function getStudents () {
		$log.debug('studentDataService.getStudents()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: 'GET'
		})
		.then(getStudentsComplete)
		.catch(getStudentsFailed);

		function getStudentsComplete(response) {
			$log.debug('studentDataService.getStudentsComplete()');

			return response.data;
		}

		function getStudentsFailed(error) {
			$log.error('studentDataService.getStudentsFailed()');

			$log.error('Getting students failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function removeStudent (id) {
		$log.debug('studentDataService.removeStudent()');

		return $http({
			url: rootUrl + 'students/' + id + '.json',
			timeout: 10000,
			method: 'DELETE'
		})
		.then(removeStudentComplete)
		.catch(removeStudentFailed);

		function removeStudentComplete(response) {
			$log.debug('studentDataService.removeStudentComplete()');

			return response.data;
		}

		function removeStudentFailed(error) {
			$log.error('studentDataService.removeStudentFailed()');

			$log.error('Removing student failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function updateStudent (student, id) {
		$log.debug('studentDataService.updateStudent()');

		return $http({
			url: rootUrl + 'students/' + id + '.json',
			timeout: 10000,
			method: "PUT",
			data: student
		})
		.then(addStudentComplete)
		.catch(addStudentFailed);

		function addStudentComplete(response) {
			$log.debug('studentDataService.addStudentComplete()');

			return response.data;
		}

		function addStudentFailed(error) {
			$log.error('studentDataService.addStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

}]);
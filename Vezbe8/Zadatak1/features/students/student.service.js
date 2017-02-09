app.factory('studentDataService', ['$log', '$http', '$q', '$firebaseObject', 
	function($log, $http, $q, $firebaseObject)
{

	var rootUrl = 'https://angularkurs.firebaseio.com/';
	var ref = firebase.database().ref().child("students");

	return {
		getStudents: getStudents,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent,
		removeStudentWS: removeStudentWS
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
		.then(updateStudentComplete)
		.catch(updateStudentFailed);

		function updateStudentComplete(response) {
			$log.debug('studentDataService.updateStudentComplete()');

			return response.data;
		}

		function updateStudentFailed(error) {
			$log.error('studentDataService.updateStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function removeStudentWS (id) {
		$log.debug('studentDataService.removeStudentWS()');

		var studentRef = ref.child(id);
		var student = $firebaseObject(studentRef);

		student.$remove().then(function(ref) {
			// data has been deleted locally and in the database
			console.log('Uspesno obrisan');
		}, function(error) {
			console.log("Error:", error);
		});
	}

}]);
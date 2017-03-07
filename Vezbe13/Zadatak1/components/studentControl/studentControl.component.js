function TestCtrl () {
	var self = this;

	self.addStudentDataToEditForm = function () {
		console.log('test');
		console.log(self);
	}
}

app.component('studentControl', {
	templateUrl: 'components/studentControl/studentControl.template.html',
	controller: TestCtrl,
	bindings: {
		studentId: '='
	}
});
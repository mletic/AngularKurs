app.config(function ($translateProvider) {

	var en = {
		STUDENTS: 'Students',
		TEACHERS: 'Teachers',
		SCHOOLS: 'Schools',
		SERBIAN: 'Serbian',
		ENGLISH: 'English'
	};
	var rs = {
		STUDENTS: 'Studenti',
		TEACHERS: 'Nastavnici',
		SCHOOLS: 'Škole',
		SERBIAN: 'Srpski',
		ENGLISH: 'Engleski'
	};

	$translateProvider.translations('en', en);
 	$translateProvider.translations('rs', rs);
 	$translateProvider.preferredLanguage('rs');

});
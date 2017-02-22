app.config(function ($translateProvider) {

	var en = {
		STUDENTS: 'Students',
		TEACHERS: 'Teachers',
		SERBIAN: 'Serbian',
		ENGLISH: 'English'
	};
	var rs = {
		STUDENTS: 'Studenti',
		TEACHERS: 'Nastavnici',
		SERBIAN: 'Srpski',
		ENGLISH: 'Engleski'
	};

	$translateProvider.translations('en', en);
 	$translateProvider.translations('rs', rs);
 	$translateProvider.preferredLanguage('rs');

});
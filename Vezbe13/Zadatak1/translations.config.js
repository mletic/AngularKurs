app.config(function ($translateProvider) {

	$translateProvider.useSanitizeValueStrategy('sanitize');

	var en = {
		STUDENTS: 'Students',
		TEACHERS: 'Teachers',
		SCHOOLS: 'Schools',
		SERBIAN: 'Serbian',
		ENGLISH: 'English',
		SELECT_LANGUAGE: 'Choose language'
	};
	var rs = {
		STUDENTS: 'Studenti',
		TEACHERS: 'Nastavnici',
		SCHOOLS: 'Skole',
		SERBIAN: 'Srpski',
		ENGLISH: 'Engleski',
		SELECT_LANGUAGE: 'Izaberite jezik'
	};

	$translateProvider.translations('en', en);
 	$translateProvider.translations('rs', rs);
 	$translateProvider.preferredLanguage('en');

});
app.directive('sideBar', function ($state, $mdSidenav) {
	return {
		restrict: 'E',
		scope: {
			myItems: '=items',
		},
		link: function(scope, element, attrs) {
			scope.changeState = changeState;
		},
		templateUrl: 'directives/sidebar1/sidebar1.template.html'
	}

	function changeState (stateName) {
		console.log(stateName);
		$state.go(stateName);
		toggleLefSidebar();
	}

	function toggleLefSidebar () {
		$mdSidenav('left').toggle();
	}
});
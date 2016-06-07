angular.module('emporium')
.controller('rootCtrl', function( $scope, itemService ) {
	
	$scope.getItems = function() {
		$scope.items = itemService.getItems();
	};
	$scope.getItems();

});
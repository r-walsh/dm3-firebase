angular.module('emporium')
.directive('addItem', function() {
	return {

		  templateUrl: './src/components/addItem/addItem.html'
		, controller: function( $scope, itemService ) {
			$scope.formShow = false;

			$scope.addItem = function( newItem ) {
				itemService.addItem( newItem );
				$scope.formShow = false;
			}
		}

	}
});
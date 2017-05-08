angular.module('pizzaTuesdayApp').controller('PizzaCalculatorController', function PizzaCalculatorController($scope) {
	$scope.pizzasToOrder = 0;
	$scope.pizzasLeft = 0;

	$scope.eat = function () {
		if ($scope.pizzasLeft > 0) {
			$scope.pizzasLeft -= 1;
		}
	}

	$scope.order = function () {
		if ($scope.pizzasToOrder > 0 && $scope.pizzasToOrder < 100) {
			$scope.pizzasLeft = $scope.pizzasToOrder;
		}
	}
});
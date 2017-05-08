/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"/>
/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-mocks.js"/>
/// <reference path="dependencies/pizzaTuesdayApp.js" />
/// <reference path="dependencies/pizzaCalculatorController.js" />

describe("Pizza tuesday app", function () {
    var pizzTuesdayController, $scope = {};

    beforeEach(function () {
        angular.mock.module('pizzaTuesdayApp');
        var $controller;
        angular.mock.inject(function (_$controller_) {
            $controller = _$controller_;
        });
        pizzTuesdayController = $controller("PizzaCalculatorController", { $scope: $scope });
    });

    it("should have pizzas left the same amount as ordered", function () {
        var assertValue = 5;
        $scope.pizzasToOrder = assertValue;
        $scope.order();
        expect($scope.pizzasLeft).toBe(assertValue);
    });

    describe("should not", function () {
        it("order negative amount of pizzas", function () {
            $scope.pizzasToOrder = -1;
            $scope.order();
            expect($scope.pizzasLeft).toBe(0);
        });
        it("order too much pizzas", function () {
            $scope.pizzasToOrder = Number.MAX_SAFE_INTEGER;
            $scope.order();
            expect($scope.pizzasLeft).toBe(0);
        });
    });

    it("should decrement pizzas left amount after one was eaten", function () {
        $scope.pizzasLeft = 10;
        $scope.eat();
        expect($scope.pizzasLeft).toBe(9);
    });
});



//http://www.bradoncode.com/blog/2015/05/17/angularjs-testing-controller/
var app = angular.module("app", []);
app.controller("indexCtrl", function ($scope) {
    var calculator = new Calculator();
    var setCalcToScope = function () {
        $scope.isDecimalPointEnabled = calculator.isDecimalPointEnalbe;
        $scope.isError = calculator.isError;
        $scope.text = calculator.text;
    };
    setCalcToScope();
    $scope.command = function (command) {
        calculator.handleCommand(command);
        setCalcToScope();
    };
});
//# sourceMappingURL=app.js.map
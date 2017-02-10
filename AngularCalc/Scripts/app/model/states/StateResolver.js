var StateResolver = (function () {
    function StateResolver() {
    }
    StateResolver.prototype.next = function (currentState, operation) {
        if (operation instanceof UnaryOperation) {
            return currentState.nextUnary(operation);
        }
        if (operation instanceof BinaryOperation) {
            return currentState.nextBinary(operation);
        }
        throw "Operation type not recognized";
    };
    return StateResolver;
}());
//# sourceMappingURL=StateResolver.js.map
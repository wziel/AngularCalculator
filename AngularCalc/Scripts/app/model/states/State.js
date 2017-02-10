var State = (function () {
    function State(stateParams) {
        this.stateParams = stateParams;
    }
    State.prototype.setDecimalPoint = function () {
        this.stateParams.rightOperand += ".";
        return new InsertOperandState(this.stateParams);
    };
    return State;
}());
//# sourceMappingURL=State.js.map
var StateParams = (function () {
    function StateParams(lastOperation, leftOperand, rightOperand) {
        this.pendingOpration = lastOperation;
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
    }
    StateParams.prototype.getRightOperandAsNumber = function () {
        var rightOperandAsNumber = parseFloat(this.rightOperand);
        if (isNaN(rightOperandAsNumber)) {
            return 0;
        }
        return rightOperandAsNumber;
    };
    StateParams.prototype.getRightOperand = function () {
        return (this.rightOperand == null ? "0" : this.rightOperand);
    };
    return StateParams;
}());
//# sourceMappingURL=StateParams.js.map
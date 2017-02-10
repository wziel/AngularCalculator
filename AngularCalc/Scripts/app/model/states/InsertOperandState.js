var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InsertOperandState = (function (_super) {
    __extends(InsertOperandState, _super);
    function InsertOperandState() {
        _super.apply(this, arguments);
    }
    InsertOperandState.prototype.append = function (c) {
        this.stateParams.rightOperand += c;
        return this;
    };
    InsertOperandState.prototype.getText = function () {
        return this.stateParams.rightOperand;
    };
    InsertOperandState.prototype.nextUnary = function (operation) {
        this.performPendingOperation();
        this.stateParams.leftOperand = operation.perform(this.stateParams.leftOperand);
        return new ShowResultState(this.stateParams);
    };
    InsertOperandState.prototype.nextBinary = function (operation) {
        this.performPendingOperation();
        this.stateParams.pendingOpration = operation;
        return new WaitForSecondOperandState(this.stateParams);
    };
    InsertOperandState.prototype.performPendingOperation = function () {
        var newValue = this.stateParams.pendingOpration == null ? this.stateParams.getRightOperandAsNumber()
            : this.stateParams.pendingOpration.perform(this.stateParams.leftOperand, this.stateParams.getRightOperandAsNumber());
        this.stateParams.leftOperand = newValue;
        this.stateParams.rightOperand = "";
        this.stateParams.pendingOpration = null;
    };
    return InsertOperandState;
}(State));
//# sourceMappingURL=InsertOperandState.js.map